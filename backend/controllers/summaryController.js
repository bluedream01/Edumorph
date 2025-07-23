require("dotenv").config();
const fs = require("fs");
const pdfParse = require("pdf-parse");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Supadata } = require("@supadata/js");
const User = require("../models/user.model");

const summary = async (req, res) => {
  const { url } = req.body;
  const userId = req.user?.id;
  const user = await User.findById(userId);
  const userClass = user?.onboarding?.class || "General";
  const userBoard = user?.onboarding?.board || "General";
  const subject = user?.onboarding?.subjects?.[0] || "General";
  const subjectLevel = user?.onboarding?.levels?.[subject] || "Beginner";

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "YouTube URL is required." });
  }

  const supadata = new Supadata({ apiKey: process.env.SUPA_KEY });

  try {
    const transcript = await supadata.youtube.transcript({ url });

    if (
      !transcript ||
      !Array.isArray(transcript.content) ||
      transcript.content.length === 0
    ) {
      return res
        .status(404)
        .json({ error: "Transcript not found or invalid format." });
    }

    const fullText = transcript.content.map((line) => line.text).join(" ");
    const ai = new GoogleGenerativeAI(process.env.API_KEY);
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(
      `Summarize the following YouTube video transcript in detail for a ${subjectLevel} level ${subject} student of Class ${userClass}, Board ${userBoard}:\n\n${fullText}`
    );
    console.log(result);

    const response = await result.response;
    const text = await response.text();

    // ✅ Give XP after successful summary
    if (req.user?._id) {
      await User.findByIdAndUpdate(req.user._id, { $inc: { xp: 10 } });
    }
    console.log("User ID for XP update:", req.user?._id);

    res.status(200).json({ summary: text });
  } catch (error) {
    console.error("Error generating summary:", error);
    res.status(500).json({ error: "Failed to generate summary." });
  }
};

// translating text using ai

const translation = async (req, res) => {
  const { summary, language } = req.body;
  try {
    const ai = new GoogleGenerativeAI(process.env.API_KEY);
    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(
      `translate the\n${summary} in \n\n${language}`
    );

    const response = await result.response;
    const text = await response.text();

    console.log(text);
    res.status(200).json({ summary: text });
  } catch (error) {
    res.status(500).json({ error: "Failed to translate" });
  }
};

//QUIZ
const quiz = async (req, res) => {
  const user = await User.findById(req.user._id);
  const subjects = user?.onboarding?.subjects || [];
const levels = user?.onboarding?.levels || {};

const subjectDetails = subjects.map(
  (subj) => `${subj} (${levels[subj] || "Beginner"})`
).join(", ");

  const userClass = user?.onboarding?.class || "General";
  const userBoard = user?.onboarding?.board || "General";

  const genAI = new GoogleGenerativeAI(process.env.API_KEY);

  try {
    // ✅ Check if PDF is provided
    if (!req.file || !req.file.path) {
      return res.status(400).json({ error: "PDF file is missing" });
    }

    const { difficulty, noOfQuestions } = req.body;
    const filePath = req.file.path;
    console.log(difficulty);
    // ✅ Read and parse the PDF
    const pdfBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(pdfBuffer);
    const fullText = pdfData.text?.trim();

    if (!fullText || fullText.length < 50) {
      fs.unlinkSync(filePath);
      return res
        .status(400)
        .json({ error: "PDF content is too short or empty" });
    }

    // ✅ Use Gemini to summarize
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // const summaryResponse = await model.generateContent(
    //   `Summarize the following:\n\n${fullText}`
    // );
    // const summary = (await summaryResponse.response).text();

    // ✅ Generate quiz using the summary
    const quizPrompt = `
      Create a ${difficulty} level quiz for Class ${userClass} (${userBoard}) whose level is ${subjectDetails}
with ${noOfQuestions} multiple choice questions based on this summary:\n\n"${fullText}".

Return as JSON:
[
  {
    "question": "...",
    "options": ["A", "B", "C", "D"],
    "correctAnswer": "..."
  }
]
    `;
console.log(quizPrompt);
    const quizResponse = await model.generateContent(quizPrompt);
    const quizText = (await quizResponse.response).text();
    if (difficulty === "Easy") {
      if (req.user?._id) {
        await User.findByIdAndUpdate(req.user._id, { $inc: { xp: 50 } });
      }
      console.log("User ID for XP update:", req.user?._id);
    } else if (difficulty === "Medium") {
      if (req.user?._id) {
        await User.findByIdAndUpdate(req.user._id, { $inc: { xp: 75 } });
      }
      console.log("User ID for XP update:", req.user?._id);
    } else if (difficulty === "Hard") {
      if (req.user?._id) {
        await User.findByIdAndUpdate(req.user._id, { $inc: { xp: 100 } });
      }
      console.log("User ID for XP update:", req.user?._id);
    }

    // ✅ Safely parse AI output
    let quizJSON;
    try {
      const jsonStart = quizText.indexOf("[");
      const jsonEnd = quizText.lastIndexOf("]") + 1;
      const jsonString = quizText.substring(jsonStart, jsonEnd);
      quizJSON = JSON.parse(jsonString);
    } catch (parseError) {
      console.error("❌ JSON parsing failed:", parseError.message);
      console.log("⚠️ AI Output:\n", quizText);
      fs.unlinkSync(filePath);
      return res.status(500).json({ error: "AI response was not valid JSON" });
    }

    // ✅ Clean up the uploaded file
    fs.unlinkSync(filePath);

    // ✅ Send back the quiz
    res.status(200).json({ quiz: quizJSON });
  } catch (error) {
    console.error("🔥 Error generating quiz:", error.message);
    res.status(500).json({ error: "Failed to generate quiz" });
  }
};

//mindmap

const mindMap = async (req, res) => {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const user = await User.findById(req.user._id);
  const subject = user?.onboarding?.subjects?.[0] || "General";
  const subjectLevel = user?.onboarding?.levels?.[subject] || "Beginner";
  const userClass = user?.onboarding?.class || "General";
  const userBoard = user?.onboarding?.board || "General";

  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "PDF file required" });
    if (file.mimetype !== "application/pdf") {
      return res.status(400).json({ error: "Only PDF files are allowed" });
    }

    // Step 1: Extract text
    const buffer = fs.readFileSync(file.path);
    const pdfData = await pdfParse(buffer);
    const extractedText = pdfData.text.slice(0, 5000); // Safe limit for prompt

    // Step 2: Prompt for Markmap
    const prompt = `
You are an experienced teacher.

Convert the following content into a **mind map** in **valid Markdown** using the following strict structure:

Use:
- \`#\` for the main topic (title of mind map)
- \`##\` for primary branches
- \`###\` for sub-branches
- \`- bullet\` for details under each sub-branch

Only include the Markdown inside the code block.

Example format:
\`\`\`markdown
# Machine Learning

## Types
### Supervised
- Uses labeled data
### Unsupervised
- Finds hidden patterns

## Applications
- Recommendation Systems
- Fraud Detection
\`\`\`

Now convert this text (Class ${userClass}, Board: ${userBoard}, Subject: ${subject}, Level: ${subjectLevel}) into a properly structured markdown mindmap.

Text:
${extractedText}
`.trim();

    console.log(prompt);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const raw = await response.text();

    // Step 3: Extract markdown
    const match = raw.match(/```markdown\s*([\s\S]*?)```/i);
    if (!match || !match[1].trim()) {
      return res
        .status(500)
        .json({ error: "Failed to extract markdown from AI response." });
    }

    const markdown = match[1].trim();
    if (req.user?._id) {
      await User.findByIdAndUpdate(req.user._id, { $inc: { xp: 20 } });
    }
    console.log("User ID for XP update:", req.user?._id);
    res.json({ markdown });
    console.log("✅ Markmap Markdown Generated:\n", markdown);

    // Step 4: Delete temp file
    await fs.promises
      .unlink(file.path)
      .catch((err) => console.error("Failed to delete file:", err));
  } catch (error) {
    console.error("❌ Error generating mindmap:", error);
    res.status(500).json({ error: "Failed to generate mind map" });
  }
};

module.exports = {
  summary,
  translation,
  quiz,
  mindMap,
};

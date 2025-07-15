require("dotenv").config();
const fs = require("fs");
const pdfParse = require("pdf-parse");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Supadata } = require("@supadata/js");

const summary = async (req, res) => {
  const { url } = req.body;
  if (!url || typeof url !== "string") {
    return res
      .status(400)
      .json({ error: "YouTube URL is required in request body." });
  }

  const supadata = new Supadata({
    apiKey: process.env.SUPA_KEY,
  });
  try {
    const transcript = await supadata.youtube.transcript({
      url: url,
    });

    console.log("Transcript response:", transcript); // 👈 debug log
    console.log(
      "Transcript object structure:",
      JSON.stringify(transcript, null, 2)
    );

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
    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(
      `Summarize the following YouTube video transcript in detail:\n\n${fullText}`
    );

    const response = await result.response;
    const text = await response.text();

    console.log(text);
    res.status(200).json({ summary: text });
  } catch (error) {
    console.error("Error generating summary:", error);
    res.status(500).json({ error: "Failed to generate summary" });
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
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);

  try {
    // ✅ Check if PDF is provided
    if (!req.file || !req.file.path) {
      return res.status(400).json({ error: "PDF file is missing" });
    }

    const { difficulty, noOfQuestions } = req.body;
    const filePath = req.file.path;

    // ✅ Read and parse the PDF
    const pdfBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(pdfBuffer);
    const fullText = pdfData.text?.trim();

    if (!fullText || fullText.length < 50) {
      fs.unlinkSync(filePath);
      return res.status(400).json({ error: "PDF content is too short or empty" });
    }

    // ✅ Use Gemini to summarize
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const summaryResponse = await model.generateContent(`Summarize the following:\n\n${fullText}`);
    const summary = (await summaryResponse.response).text();

    // ✅ Generate quiz using the summary
    const quizPrompt = `
      Create a ${difficulty} level quiz with ${noOfQuestions} multiple choice questions
      based on this summary:\n\n"${summary}".
      
      Format as a JSON array like:
      [
        {
          "question": "What is the capital of France?",
          "options": ["Paris", "London", "Berlin", "Rome"],
          "correctAnswer": "Paris"
        }
      ]
    `;

    const quizResponse = await model.generateContent(quizPrompt);
    const quizText = (await quizResponse.response).text();

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
Convert the following lab experiment into a mind map using markdown format.
Use clear, nested headings in this structure:

# Title
## Section
### Subsection
- Bullet points where helpful

Respond with only markdown enclosed in:

\`\`\`markdown
# ...
## ...
\`\`\`

Text:
${extractedText}
    `.trim();

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const raw = await response.text();

    // Step 3: Extract markdown
    const match = raw.match(/```markdown\s*([\s\S]*?)```/i);
    if (!match || !match[1].trim()) {
      return res.status(500).json({ error: "Failed to extract markdown from AI response." });
    }

    const markdown = match[1].trim();
    res.json({ markdown });
    console.log("✅ Markmap Markdown Generated:\n", markdown);

    // Step 4: Delete temp file
    await fs.promises.unlink(file.path).catch((err) =>
      console.error("Failed to delete file:", err)
    );
  } catch (error) {
    console.error("❌ Error generating mindmap:", error);
    res.status(500).json({ error: "Failed to generate mind map" });
  }
};

module.exports = {
  summary,translation,quiz,mindMap
};

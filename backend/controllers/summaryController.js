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
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

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
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

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

//quiz generation using ai
const quiz=async(req,res)=>{
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  try {
    const { difficulty, noOfQuestions } = req.body;
    const filePath = req.file.path;

    // Step 1: Extract text from PDF
    const pdfBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(pdfBuffer);
    const fullText = pdfData.text;

    // Step 2: Summarize using Gemini
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const summaryResponse = await model.generateContent(`Summarize the following:\n\n${fullText}`);
    const summary = (await summaryResponse.response).text();

    // Step 3: Create quiz using summary
    const quizPrompt = `
      Create a ${difficulty} level quiz with ${noOfQuestions} multiple choice questions
      based on this summary:\n\n"${summary}".
      
      Format as JSON array like:
      [
        {
          "question": "....",
          "options": ["A", "B", "C", "D"],
          "answer": "B"
        }
      ]
    `;

    const quizResponse = await model.generateContent(quizPrompt);
    const quizText = (await quizResponse.response).text();

    // Step 4: Extract JSON
    const jsonStart = quizText.indexOf("[");
    const jsonEnd = quizText.lastIndexOf("]") + 1;
    const quizJSON = JSON.parse(quizText.substring(jsonStart, jsonEnd));
    console.log(quizJSON);

    // Cleanup file
    fs.unlinkSync(filePath);

    res.status(200).json({ quiz: quizJSON });
  } catch (error) {
    console.error("Error generating quiz:", error);
    res.status(500).json({ error: "Failed to generate quiz" });
  }

};

module.exports = {
  summary,translation,quiz
};

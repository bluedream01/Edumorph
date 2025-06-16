require("dotenv").config();
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
    apiKey: process.env.SUPA_KEY ,
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

module.exports = {
  summary,
};

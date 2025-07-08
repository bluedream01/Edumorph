const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

router.post("/ask", async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string" || message.trim() === "") {
    return res.status(400).json({ error: "Please provide a valid message." });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(message);
    const reply = result.response.text();

    res.json({ reply: reply.trim() });
  } catch (err) {
    console.error("❌ Gemini error:", err);
    res.status(500).json({ error: "Failed to get response from Gemini Flash" });
  }
});

module.exports = router;

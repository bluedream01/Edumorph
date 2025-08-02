const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

// In-memory conversation history (can be replaced with Redis or DB for production)
let chatSession = null;

router.post("/ask", async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string" || message.trim() === "") {
    return res.status(400).json({ error: "Please provide a valid message." });
  }

  try {
    // Load model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Initialize or reuse chat session
    if (!chatSession) {
      chatSession = await model.startChat({
        history: [
          {
            role: "user",
            parts: [
              {
                text: `
You are EduBot, a friendly and helpful AI tutor that ONLY answers questions related to education.
NEVER say you are a large language model or refer to your training or your limitations.
ALWAYS reply like a chatbot assistant focused on helping students learn.
If someone asks about your identity or unrelated topics, politely say you only assist with learning and studying.
`,
              },
            ],
          },
          {
            role: "model",
            parts: [
              {
                text: "Sure! I'm EduBot. Ask me anything related to learning 😊",
              },
            ],
          },
        ],
      });
    }

    // Send user message to chat
    const result = await chatSession.sendMessage(message);
    const reply = result.response.text();

    res.json({ reply: reply.trim() });
  } catch (err) {
    console.error("❌ Gemini error:", err);
    res.status(500).json({ error: "Failed to get response from Gemini" });
  }
});

module.exports = router;

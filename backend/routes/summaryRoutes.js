const express = require('express');
const multer = require("multer");
const { summary, translation, quiz, mindMap } = require('../controllers/summaryController');
const { getNotes, getNote, createNote, deleteNote, updateNote, toggleFavorite } = require('../controllers/notesController');
const { updateXP } = require('../controllers/userController');
const verifyToken = require('../middleware/auth.middleware');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// ✅ XP
router.post('/auth/update-xp', verifyToken, updateXP);

// ✅ Summary, translation, quiz, mindmap
router.post('/', verifyToken, summary);
router.post('/translation', translation);
router.post('/quiz', verifyToken, upload.single("pdf"), quiz);
router.post("/mindmap", verifyToken, upload.single("file"), mindMap);

// ✅ Notes
router.use('/note', verifyToken);
router.get('/note', getNotes);
router.get('/note/:id', getNote);
router.post('/note', createNote);
router.delete('/note/:id', deleteNote);
router.patch('/note/:id', updateNote);
router.patch('/note/:id/favorite', toggleFavorite);

// ---------------- AI Test Routes ---------------- //

// 1️⃣ Generate Quiz
router.post('/ai-test', verifyToken, async (req, res) => {
    const { subjects } = req.body;

    if (!subjects || !Array.isArray(subjects) || subjects.length === 0) {
        return res.status(400).json({ error: "Subjects with chapters are required" });
    }

    try {
        const ai = new GoogleGenerativeAI(process.env.API_KEY);
        const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            You are an expert teacher.
            Create a set of 10 mixed-difficulty SUBJECTIVE quiz questions with answers.
            DO NOT include options or multiple choice answers.
            DO NOT include the answers inside the question text.
            Return ONLY valid JSON matching this exact format:

            {
              "questions": [
                { "id": 1, "question": "string", "answer": "string" }
              ]
            }

            Subjects and chapters:
            ${subjects.map(s => `${s.name} - Chapters: ${s.chapters.join(", ")}`).join("\n")}
        `;

        const result = await model.generateContent(prompt);
        const text = await result.response.text();
        console.log("Raw AI response:", text);

        // Extract JSON substring from AI response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            return res.status(500).json({ error: "AI response missing JSON", raw: text });
        }

        const jsonText = jsonMatch[0];

        let parsed;
        try {
            parsed = JSON.parse(jsonText);
        } catch (e) {
            return res.status(500).json({ error: "AI did not return valid JSON", raw: text });
        }

        res.json(parsed);
    } catch (error) {
        console.error("AI Test Error:", error);
        res.status(500).json({ error: "Failed to generate AI test" });
    }
});


// 2️⃣ Review Answers
router.post('/ai-review', verifyToken, async (req, res) => {
    const { questions, studentAnswers } = req.body;

    if (!questions || !studentAnswers) {
        return res.status(400).json({ error: "Questions and student answers are required" });
    }

    try {
        const ai = new GoogleGenerativeAI(process.env.API_KEY);
        const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            You are a helpful teacher.
            Review the student's quiz answers.

            Quiz data:
            ${JSON.stringify(questions)}

            Student answers:
            ${JSON.stringify(studentAnswers)}

            For each question, give:
            - Correct/Incorrect
            - Correct answer
            - Explanation

            Also give a final score and overall review.

            Output JSON only:
            {
              "results": [
                { "id": 1, "status": "Correct", "correctAnswer": "string", "explanation": "string" }
              ],
              "score": "8/10",
              "review": "string"
            }
        `;

        const result = await model.generateContent(prompt);
        const text = await result.response.text();

        console.log("Raw AI review response:", text);

        // Attempt to extract JSON block from the response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            return res.status(500).json({ error: "AI response missing JSON", raw: text });
        }

        const jsonText = jsonMatch[0];

        let parsed;
        try {
            parsed = JSON.parse(jsonText);
        } catch (e) {
            return res.status(500).json({ error: "AI did not return valid JSON", raw: text });
        }

        res.json(parsed);
    } catch (error) {
        console.error("AI Review Error:", error);
        res.status(500).json({ error: "Failed to review answers" });
    }
});

module.exports = router;

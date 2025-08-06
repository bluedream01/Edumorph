const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const verifyToken = require("../middleware/auth.middleware");

// 🧑‍🏫 Get all students (teacher view)
// ✅ Add onboarding.subjects and onboarding.levels to the select query
router.get("/students", verifyToken, async (req, res) => {
  try {
    const students = await User.find().select(
      "username email onboarding.class onboarding.board onboarding.subjects onboarding.levels xp firstName lastName"
    );

    res.status(200).json(students);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;

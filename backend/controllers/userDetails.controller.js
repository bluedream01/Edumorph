const User = require("../models/user.model");

exports.saveContactDetails = async (req, res) => {
  try {
    const userId = req.user._id;

    const { firstName, lastName, phone, onboarding } = req.body;

    if (
      !firstName ||
      !lastName ||
      !phone ||
      !onboarding?.class ||
      !onboarding?.board ||
      !Array.isArray(onboarding.subjects) ||
      onboarding.subjects.length === 0
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.phone = phone;

    user.onboarding.class = onboarding.class;
    user.onboarding.board = onboarding.board;
    user.onboarding.subjects = onboarding.subjects;

    user.onboarding.levels = new Map();
    onboarding.subjects.forEach((subject) => {
      user.onboarding.levels.set(subject, "Beginner");
    });

    await user.save();

    res.status(200).json({ message: "Contact details saved successfully." });
  } catch (error) {
    console.error("❌ Error saving contact details:", error);
    res
      .status(500)
      .json({ message: "Server error while saving contact details." });
  }
};

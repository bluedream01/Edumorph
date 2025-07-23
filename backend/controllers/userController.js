const User = require("../models/user.model"); // Update path if needed

// POST /auth/update-xp
const updateXP = async (req, res) => {
  const userId = req.user.id; // provided by verifyToken middleware
  const { xp } = req.body;

  if (typeof xp !== "number" || xp <= 0) {
    return res.status(400).json({ message: "Invalid XP value." });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $inc: { xp: xp } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({
      message: "XP updated successfully.",
      newXP: updatedUser.xp,
    });
  } catch (error) {
    console.error("XP update failed:", error);
    res.status(500).json({ message: "Server error during XP update." });
  }
};

module.exports = { updateXP };

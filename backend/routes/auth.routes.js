const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const controller = require("../controllers/auth.controller");
const verifyToken = require("../middleware/auth.middleware");

// ✅ Register & Login
router.post("/register", controller.register);
router.post("/login", controller.login);

// ✅ GET profile details
router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "username email profileImage xp onboarding.levels firstName lastName onboarding.class onboarding.board"
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({
      username: user.username,
      email: user.email,
      profileImage: user.profileImage || null,
      xp: user.xp,
      levels: user.onboarding?.levels || {},
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      class: user.onboarding?.class || 0,
      board: user.onboarding?.board || "General",
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching user", error: err.message });
  }
});

// ✅ UPDATE profile info (name + email)
router.put("/profile", verifyToken, async (req, res) => {
  try {
    const { username, email, firstName, lastName } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { username, email, firstName, lastName },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      username: updatedUser.username,
      email: updatedUser.email,
      firstName: updatedUser.firstName,
      email: updatedUser.lastName,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating profile", error: err.message });
  }
});

// ✅ UPDATE profile image
router.put("/profile-image", verifyToken, async (req, res) => {
  try {
    const { imageUrl } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { profileImage: imageUrl },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Profile image updated",
      profileImage: user.profileImage,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating image", error: err.message });
  }
});
// router.post("/api/user/onboarding", verifyToken, async (req, res) => {
router.post("/onboarding", verifyToken, async (req, res) => {
  try {
    const { class: userClass, board, subjects, levels } = req.body;
    const userId = req.user._id;

    await User.findByIdAndUpdate(userId, {
      onboarding: {
        class: userClass,
        board,
        subjects,
        levels,
      },
    });

    res.status(200).json({ message: "Onboarding data saved" });
  } catch (err) {
    console.error("Failed to save onboarding:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.post("/update-xp", verifyToken, async (req, res) => {
  try {
    const { xp } = req.body;

    if (typeof xp !== "number" || xp < 0) {
      return res.status(400).json({ message: "Invalid XP value" });
    }

    await User.findByIdAndUpdate(req.user._id, { $inc: { xp } });

    const updatedUser = await User.findById(req.user._id).select("xp");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "XP updated successfully",
      xp: updatedUser.xp,
    });
  } catch (err) {
    console.error("Error updating XP:", err);
    res
      .status(500)
      .json({ message: "Failed to update XP", error: err.message });
  }
});

module.exports = router;

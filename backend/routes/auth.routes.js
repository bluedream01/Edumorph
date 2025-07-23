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
    const user = await User.findById(req.user._id).select("username email profileImage");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      username: user.username,
      email: user.email,
      profileImage: user.profileImage || null,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err.message });
  }
});

// ✅ UPDATE profile info (name + email)
router.put("/profile", verifyToken, async (req, res) => {
  try {
    const { username, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { username, email },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      username: updatedUser.username,
      email: updatedUser.email,
    });
  } catch (err) {
    res.status(500).json({ message: "Error updating profile", error: err.message });
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
    res.status(500).json({ message: "Error updating image", error: err.message });
  }
});

module.exports = router;


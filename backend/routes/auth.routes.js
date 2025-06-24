const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

const controller = require("../controllers/auth.controller");
const verifyToken = require("../middleware/auth.middleware"); // ✅ this is your middleware

router.post("/register", controller.register);
router.post("/login", controller.login);

//protected route
router.get("/profile", verifyToken, async (req, res) => {
  try {
    console.log("Decoded user from token:", req.user); // 👈 DEBUG LOG
    const user = await User.findById(req.user.id).select("username");
    if (!user) return res.status(404).json({ message: "User not found" });
    
    res.status(200).json({ message: `Welcome ${user.username}` });
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err.message });
  }
});



module.exports = router;

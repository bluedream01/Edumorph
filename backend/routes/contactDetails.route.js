const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const verifyToken = require('../middleware/auth.middleware');

// POST /api/contact-details
router.post('/', verifyToken, async (req, res) => {
  const userId = req.user.id;
  const { firstName, lastName, phone, class: studentClass, subjects, levels } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Save data to the user model
    user.firstName = firstName;
    user.lastName = lastName;
    user.phone = phone;

    user.onboarding.class = studentClass;
    user.onboarding.subjects = subjects;
    user.onboarding.levels = levels;

    await user.save();
    res.status(200).json({ message: 'Contact details saved successfully.' });
  } catch (error) {
    console.error('Error saving contact details:', error);
    res.status(500).json({ message: 'Server error while saving contact details.' });
  }
});

module.exports = router;

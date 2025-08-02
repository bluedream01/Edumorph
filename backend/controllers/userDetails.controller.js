const User = require('../models/user.model');

exports.saveContactDetails = async (req, res) => {
  try {
    const userId = req.user._id;

    const {
      firstName,
      lastName,
      phone,
      onboarding
    } = req.body;

    // Validate fields
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !onboarding?.class ||
      !onboarding?.subjects
    ) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Update user info
    user.firstName = firstName;
    user.lastName = lastName;
    user.phone = phone;

    user.onboarding.class = onboarding.class;
    user.onboarding.board = onboarding.board || '';
    
    // Since subjects is a string from dropdown, store it in an array
    user.onboarding.subjects = [onboarding.subjects];

    // Set levels as object with single subject
    user.onboarding.levels = {
      [onboarding.subjects]: 'Beginner'
    };

    await user.save();

    res.status(200).json({ message: 'Contact details saved successfully.' });

  } catch (error) {
    console.error('❌ Error saving contact details:', error);
    res.status(500).json({ message: 'Server error while saving contact details.' });
  }
};

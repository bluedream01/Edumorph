const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  subject : { type: String, required: true, trim: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  favorite: { type: Boolean, default: false },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true, // 🔑 Ensures each note is tied to a user
  }

}, { timestamps: true });

module.exports = mongoose.model('note', noteSchema);
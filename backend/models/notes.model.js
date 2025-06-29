const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  subject : { type: String, required: true, trim: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  favorite: { type: Boolean, default: false }

}, { timestamps: true });

module.exports = mongoose.model('note', noteSchema);
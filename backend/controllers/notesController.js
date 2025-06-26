const { default: mongoose } = require('mongoose');
const notesModel = require('../models/notes.model');

// Get all notes
const getNotes = async (req, res) => {
    const notes = await notesModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(notes);
};

// Get a single note
const getNote = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such note' });
    }

    const note = await notesModel.findById(id);
    if (!note) {
        return res.status(404).json({ error: 'No such note' });
    }

    res.status(200).json(note);
};

// Create a new note
const createNote = async (req, res) => {
    const { subject, title, description } = req.body;
    let emptyFields = [];

    if (!title) emptyFields.push('title');
    if (!subject) emptyFields.push('subject');
    if (!description) emptyFields.push('description');

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }

    try {
        const note = await notesModel.create({ title, subject, description });
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a note
const deleteNote = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such note' });
    }

    const note = await notesModel.findOneAndDelete({ _id: id });
    if (!note) {
        return res.status(404).json({ error: 'No such note' });
    }

    res.status(200).json(note);
};

// Update a note
const updateNote = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such note' });
    }

    const note = await notesModel.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true }
    );

    if (!note) {
        return res.status(404).json({ error: 'No such note' });
    }

    res.status(200).json(note);
};
//favourites
// toggle favorite
const toggleFavorite = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid note ID' });
  }

  try {
    const note = await notesModel.findById(id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    note.favorite = !note.favorite;
    await note.save();

    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ error: 'Failed to toggle favorite' });
  }
};


module.exports = {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote,
    toggleFavorite

};

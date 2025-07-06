const { default: mongoose } = require('mongoose');
const notesModel = require('../models/notes.model');

// Get all notes for logged-in user
const getNotes = async (req, res) => {
    try {
        const notes = await notesModel.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
};

// Get a single note by ID (only if owned by user)
const getNote = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid note ID' });
    }

    const note = await notesModel.findOne({ _id: id, user: req.user._id });
    if (!note) {
        return res.status(404).json({ error: 'Note not found or unauthorized' });
    }

    res.status(200).json(note);
};

// Create a new note for user
const createNote = async (req, res) => {
    const { subject, title, description } = req.body;
    const emptyFields = [];

    if (!title) emptyFields.push('title');
    if (!subject) emptyFields.push('subject');
    if (!description) emptyFields.push('description');

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }

    try {
        const note = await notesModel.create({
            title,
            subject,
            description,
            user: req.user._id  // 🔐 attach user ID
        });
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a note (only if owned by user)
const deleteNote = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid note ID' });
    }

    const note = await notesModel.findOneAndDelete({ _id: id, user: req.user._id });
    if (!note) {
        return res.status(404).json({ error: 'Note not found or unauthorized' });
    }

    res.status(200).json(note);
};

// Update a note (only if owned by user)
const updateNote = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid note ID' });
    }

    const note = await notesModel.findOneAndUpdate(
        { _id: id, user: req.user._id },
        { ...req.body },
        { new: true }
    );

    if (!note) {
        return res.status(404).json({ error: 'Note not found or unauthorized' });
    }

    res.status(200).json(note);
};

// Toggle favorite (only if owned by user)
const toggleFavorite = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid note ID' });
    }

    try {
        const note = await notesModel.findOne({ _id: id, user: req.user._id });
        if (!note) {
            return res.status(404).json({ error: 'Note not found or unauthorized' });
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

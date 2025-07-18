const express=require('express');
const multer = require("multer");
const {summary, translation,quiz,mindMap
}=require('../controllers/summaryController')
const {getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote,
    toggleFavorite
}= require('../controllers/notesController')
const router =express.Router()
const upload = multer({ dest: "uploads/" });
const verifyToken = require('../middleware/auth.middleware');
const notesModel = require("../models/notes.model");
const { updateXP } = require('../controllers/userController');
router.post('/auth/update-xp', verifyToken, updateXP);


router.post('/', verifyToken, summary);
router.post('/translation', translation)
router.post('/quiz', verifyToken, upload.single("pdf"),  quiz)
router.post("/mindmap", upload.single("file"), mindMap);
router.use('/note', verifyToken);
router.get('/note',getNotes)
router.get('/note/:id',getNote)
router.post('/note',createNote)
router.delete('/note/:id',deleteNote)
router.patch('/note/:id',updateNote)
router.patch('/note/:id/favorite', toggleFavorite); // ✅






module.exports=router
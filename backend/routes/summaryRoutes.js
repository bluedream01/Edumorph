const express=require('express');
const multer = require("multer");
const {summary, translation,quiz
}=require('../controllers/summaryController')
const router =express.Router()
const upload = multer({ dest: "uploads/" });


router.post('/',summary)
router.post('/translation', translation)
router.post('/quiz', upload.single("file"), quiz)






module.exports=router
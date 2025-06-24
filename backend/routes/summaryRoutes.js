const express=require('express');
const multer = require("multer");
const {summary, translation,quiz,mindMap
}=require('../controllers/summaryController')
const router =express.Router()
const upload = multer({ dest: "uploads/" });


router.post('/',summary)
router.post('/translation', translation)
router.post('/quiz', upload.single("pdf"), quiz)
router.post("/mindmap", upload.single("file"), mindMap);





module.exports=router
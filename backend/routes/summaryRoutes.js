const express=require('express')
const {summary, translation
}=require('../controllers/summaryController')
const router =express.Router()
router.post('/',summary)
router.post('/translation', translation)





module.exports=router
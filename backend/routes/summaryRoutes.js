const express=require('express')
const {summary
}=require('../controllers/summaryController')
const router =express.Router()
router.post('/',summary)





module.exports=router
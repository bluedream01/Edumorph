const express=require('express')
const {summary
}=require('../controllers/summaryController')
const router =express.Router()
router.get('/',summary)





module.exports=router
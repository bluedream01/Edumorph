require('dotenv').config()
const express= require('express')
const mongoose=require('mongoose')
const summary = require('./routes/summaryRoutes');
const app=express();
app.use(express.json());



app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/SummaryCall',summary);
app.listen(4000,()=>{
    console.log('listening on port 4000');})
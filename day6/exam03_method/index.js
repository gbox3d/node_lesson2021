import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
//미들웨어

//method 
app.post('/api/v1/hello',(req,res)=> {

    console.log(req.body)
    
    res.json({r:'ok'})
})


app.listen(process.env.PORT,()=> {
    if(process.env.NODE_ENV == 'dev') {
        console.log(`server start at : ${process.env.PORT}`)
    }
})
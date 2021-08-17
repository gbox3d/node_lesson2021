import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.NODE_ENV)

const app = express()

app.get('/',(req,res)=> {
    res.send('hello express');
})

app.all('*',(req,res)=> {
    res
    .status(404)
    .send(`page not found ${req.url}`)
})


app.listen(process.env.PORT,()=> {
    console.log(`server start at : ${process.env.PORT}`)
})
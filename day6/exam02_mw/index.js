import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use((req,res,next)=> {
    console.log(req.method,req.url,(new Date()).toISOString())
    next()
})

app.use((req,res,next)=> {
    if(req.query.apikey == 'qwer') {
        next()
    }
    else {
        res.send('<h1>인증이 필요합니다.</h1>')
    }
})


app.get('/home',(req,res)=> {

    res.send('<h1>home</h1>')

})

app.get('/about',(req,res)=> {
    
    res.send('<h1>about</h1>')
})


app.listen(process.env.PORT,()=> {
    console.log(`server start at : ${process.env.PORT}`)
})

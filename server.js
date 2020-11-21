const express = require('express')

const {db , Tasks} = require('./db.js')

const PORT = process.env.PORT || 4444
const app = express()

app.get('/',(req,res)=>{
    res.send('HELLO TO ALL')
})

app.get('/tasks',async (req,res)=>{
    const tasks = await Tasks.findAll();
    res.send(tasks)
})

app.post('/tasks',async(req,res)=>{
    const task = await Tasks.create(req.body)
    res.send(task)
})

app.use('/public',express.static(__dirname + "/public"))

db.sync()
.then(()=>{
    app.listen(PORT,()=>console.log("Site is hosted"))
})
.catch((err)=>{
    console.error(err)
})
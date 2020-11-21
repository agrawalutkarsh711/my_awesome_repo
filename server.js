const express = require('express')
const PORT = process.env.PORT || 4444
const app = express()

app.get('/',(req,res)=>{
    res.send('HELLO TO ALL')
})

app.use('/public',express.static(__dirname + "/public"))

app.listen(PORT,()=>console.log("Site is hosted"))
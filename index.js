const express = require("express");
const awt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.use(express.json())

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/public/Login.html')
})

app.post('/signup', (req, res)=>{
    res.json({
        message: "hai"
    })
})
app.post('/signin', (req, res)=>{
    
})
app.listen(port, ()=>{
    console.log("server running on the port ",port);
})
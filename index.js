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
        message: "the signup page was working"
    })
})
app.post('/signin', (req, res)=>{
    res.json({
        message: "the sign-in page was working"
    })
})
app.listen(port, ()=>{
    console.log("server running on the port ",port);
})
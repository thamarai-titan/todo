const express = require("express");
const awt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send("hello");
})

app.post('/signup', (req, res)=>{
    
})
app.listen(port, ()=>{
    console.log("server running on the port ",port);
})
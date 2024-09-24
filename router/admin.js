const {Router} = require('express');
const adminRouter = Router();

const {adminModule} = require('../db');


adminRouter.post('signup', async (req, res)=>{
    const {email, password, firstName, lastName} = req.body;

    await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    });

    res.send("the admin details are added to the table");
})
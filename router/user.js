const { Router } = require("express");
const { models } = require("mongoose");
const { userModule } = require("../db");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  await userModule.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName
  });

  res.send("user created successfull")
});

module.exports = {
  userRouter: userRouter,
};

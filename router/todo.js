const { Router } = require("express");
const todoRouter = Router();
const { adminModule, todoModule } = require("../db");


todoRouter.post("/create-todo", async (req, res) => {
  const { email, title, todo, done } = req.body;

  await todoModule.create({
    email: email,
    title: title,
    todo: todo,
    done: done,
  });

  res.send("Todo added");
});

module.exports = {
  todoRouter:todoRouter
};

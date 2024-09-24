const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const todoSchema = new Schema({
  email: String,
  title: String,
  todo: String,
  done: Boolean,
});

const userModule = mongoose.model("user", userSchema);
const adminModule = mongoose.model("admin", adminSchema);
const todoModule = mongoose.model("todo", todoSchema);

module.exports = {
  userModule,
  adminModule,
  todoModule
};

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
})

const userModule = mongoose.model("user", userSchema);
const adminModule = mongoose.model("admin", adminSchema);

module.exports = {
    userModule,
    adminModule    
}
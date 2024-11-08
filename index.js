require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());

async function main() {
  await mongoose.connect(process.env.Mongo_db_Url);
}
main();
const { userRouter } = require("./router/user");
const { adminRouter } = require("./router/admin");
const { todoRouter } = require("./router/todo");
app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/todo", todoRouter);

app.listen(3000, () => {
  console.log(process.env.Mongo_db_Url);
});

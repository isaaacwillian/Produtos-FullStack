const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/project", (err) => {
  if (err) return console.log(err);

  console.log("Connected to database");
});

app.use("/user", userRouter);

app.listen(3333, () => console.log("Server is running"));

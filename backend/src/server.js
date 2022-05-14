const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const cookieParser = require("cookie-parser");
const productRouter = require("./routes/productRouter");

const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017/project", (err) => {
  if (err) return console.log(err);

  console.log("Connected to database");
  console.log(new Date().toString());
});

app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(3333, () => console.log("Server is running"));

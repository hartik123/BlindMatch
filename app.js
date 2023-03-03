const express = require("express");
const app = express();
require("dotenv").config();
var mongoose = require("mongoose");
const connectDB = require("./api/db/connect");

const homeRoute = require("./api/routes/home");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", homeRoute);

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI); 
    // connect mongo DB add MONO_URI in .env
    app.listen(port, console.log(`Server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// Load environment variables from .env file
dotenv.config();

// var username = encodeURIComponent("imkawsar007");
// var password = encodeURIComponent("Happy2023?");

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI environment variable not defined");
}

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});

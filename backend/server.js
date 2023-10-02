import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';

// require('colors');

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"));

//routes
app.get("/", (req,res) => {
  res.send("HELLO WORLD");
});

//create port
const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
 console.log(`server is running on the port:${PORT}`);
});

// const app = require("./app");
// const connectDatabase = require("./db/Database");
// require("dotenv").config();

// // Handling uncaught Exception
// process.on("uncaughtException", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`shutting down the server for handling uncaught exception`);
// });

// // config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({
//     path: "config/.env",
//   });
// }

// // create server
// const server = app.listen(process.env.PORT, () => {
//     console.log(
//       `Server is running on http://localhost:${process.env.PORT}`
//     );
//   });
  

// //connect database
// connectDatabase();

// // unhandled promise rejection
// process.on("unhandledRejection", (err) => {
//   console.log(`Shutting down the server for ${err.message}`);
//   console.log(`shutting down the server for unhandle promise rejection`);

//   server.close(() => {
//     process.exit(1);
//   });
// });

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const port = 3000; // Define the port number

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/e-shop', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Start the server
//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Failed to connect to MongoDB:', error);
//   });
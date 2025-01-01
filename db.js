const mongoose = require("mongoose");
require('dotenv').config();
const mongoURL=process.env.MONGODB_URL;

// Define the MongoDB connection URL


// Setup mongoose connection
mongoose.connect(mongoURL);

// Get the default connection
const db = mongoose.connection; // Established bridge between mongoose and Node.js

// Define event listeners for database connection
db.on('connected', () => {
    console.log('Connected to the MongoDB server');
});

db.on('error', (err) => {
    console.error("Error connecting to MongoDB:", err);
});

db.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

module.exports = db;

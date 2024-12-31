const express = require('express');
const db = require('./db'); // Ensure your MongoDB connection is properly set up in this file
const app = express();
require('dotenv').config();
const PORT = process.env.port || 3000




const bodyParser = require('body-parser'); // Import body-parser

// Use body-parser middleware to parse JSON
app.use(bodyParser.json());


console.log('hello ji');


//import the router files
const personRoutes=require("./Routes/personRoutes");
const menuItemRoutes=require("./Routes/menuRoutes");

//use the routes
app.use('/person',personRoutes);
app.use('/',menuItemRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 
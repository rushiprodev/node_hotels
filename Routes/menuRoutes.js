const express=require("express");
const Router=express.Router();
const menuItem = require('./../models/menuItem');
const menuItemRoutes =require('./../models/menuItem');

Router.post("/menu", async (req, res) => {
    try {
      const data = req.body; // Assuming the request body contains the person data
  
      // Create a new person document using Mongoose model
      const newMenu = new menuItem(data);
  
      // Save the new person to the database
      const response = await newMenu.save();
  
      console.log("Data saved");
      res.status(200).json({
        message: "Data stored successfully",
        data: response
      });
    } catch (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports=Router;



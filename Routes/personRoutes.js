const express = require("express");
const Router = express.Router();
const Person = require("./../models/person"); // Import the Person model

// Test endpoint
Router.get("/", (req, res) => {
  res.send("Hello ji");
});

// Endpoint to add a new person
Router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data
    const newPerson = new Person(data); // Create a new person document using the Mongoose model
    const response = await newPerson.save(); // Save the new person to the database

    console.log("Data saved");
    res.status(200).json({
      message: "Data stored successfully",
      data: response,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to get people by workType
Router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // Extract workType from URL
    if (["chef", "manager", "waiter"].includes(workType)) {
      const response = await Person.find({ work: workType }); // Fetch persons with the given workType
      console.log("Response fetched");
      res.status(200).json(response); // Send the response
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to delete a person by ID
Router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // Extract the person ID from the URL parameter
    const response = await Person.findByIdAndDelete(personId); // Delete the person by ID

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("Person deleted");
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (err) {
    console.error("Error occurred during deletion", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = Router;

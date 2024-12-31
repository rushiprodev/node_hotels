const mongoose=require("mongoose");

//define the mongodb connection url
const mongourl= 'mongodb://127.0.0.1:27017/hotels'; //replace my databse with your database


//setup mongoose connection

mongoose.connect(mongourl)

//get the default connection
//mongoose maintains a default connection object representing the mongodb connection
const db=mongoose.connection;  //established bridge between mongoose and nodejs

//define event listener for database connection
db.on('connected',() => {
    console.log('connected to the mongodb server');
});

db.on('error',(err)=>{
    console.log("error is genereted ")
});

db.on("disconnect",()=>{
    console.log("mongodb disconnected");
});

module.exports=db;
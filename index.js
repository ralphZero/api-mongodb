// import express
const express = require('express')

// import mongoose
const mongoose = require('mongoose');

// import route functions
const cars = require('./src/cars.js');
// create a new server instance
const app = express();

//connecting DB using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/carDB', {UseNewUrlParser: true}).then(()=>{

// will recieve json data
app.use(express.json());

// -- define the routes --
// get all cars from db
app.get('/cars', cars.getCars);

// create new car
app.post('/cars', cars.addCar);


// listen to the server on the specified port
app.listen(3000, () => {
    console.log(`Server is running on port`);
});

})


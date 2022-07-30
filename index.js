// import express
import express from 'express';

// import route functions
import { getCars, addCar } from './src/cars.js';
// create a new server instance
const app = express();

// defining the port
const PORT = 3333;

// will recieve json data
app.use(express.json());

// -- define the routes --
// get all cars from db
app.get('/cars', getCars);

// create new car
app.post('/cars', addCar);


// listen to the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
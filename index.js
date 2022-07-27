// import express
import express from 'express';

// create a new server instance
const app = express();

// defining the port
const PORT = 3333;

// will recieve json data
app.use(express.json());

// define the routes

// listen to the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
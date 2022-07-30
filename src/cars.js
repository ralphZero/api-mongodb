// import mongoClient
import { client } from './dbconnect.js';
import { ObjectId } from 'mongodb';



// get all cars: GET
export const getCars = (req, res) => {
    client.connect((err) => {
        if(err) {
            res.status(500).send(err);
            return;
        }
        const collection = client.db('test').collection('cars');
        collection.find().toArray((err, result) => {
            if(err) res.status(500).send(err);
            if(result) res.json(result);
            client.close();
        });
    });
};


// add new car : POST
export const addCar = (req, res) => {
    client.connect((err) => {
        if(err) {
            res.status(500).send(err);
            return;
        }
        const car = req.body;
        const collection = client.db('test').collection('cars');
        collection.insertOne(car, (err, result) => {
            if(err) res.status(500).send(err);
            if(result) res.json(result);
            client.close();
        });
    });
    
};

// update car with id
export const updateCar = (req, res) => {
    client.connect((err) => {
        if(err) {
            res.status(500).send(err);
            return;
        }
        const carId = req.params.id;
        const car = req.body;
        const collection = client.db('test').collection('cars');
        collection.updateOne(
            { _id: ObjectId(carId) },
            {  $set: car },
            (err, result) => {
                if(err) res.status(500).send(err);
                if(result) res.json(result);
                client.close();
            }
        )
    })
};
// import mongoClient
const car = require('./schema')



// get all cars: GET
async function  getCars(req, res){
    const getAllCars = await car.find(req.body);
    if(!getAllCars){
        return res.send({Error: "No available cars"})
    }
    res.send({cars : getAllCars})
 }


// add new car : POST
 async function addCar(req, res){
    const addCar = new car({
         carName: req.body.carName,
         YearOfProduction: req.body.YearOfProduction,
         carModel: req.body.carModel,
         carColor:req.body.carColor
    })

    await addCar.save();

    res.send({data: addCar})
 }

// update car with id
 

module.exports={
    addCar: addCar,
    getCars: getCars
}
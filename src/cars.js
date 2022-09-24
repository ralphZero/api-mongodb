// import mongoClient
const { application } = require('express');
const car = require('./schema')



// get all cars: GET
async function  getCars(req, res){
    const getAllCars = await car.find(req.body);
    if(!getAllCars){
        return res.send({Error: "No available cars"})
    }
    res.send({cars : getAllCars})
 }

 //find a particular car
 async function uniqueCar(req, res){
   const getUnique = await car.findById({_id: req.params.id});
   if(!getUnique){
    return res.send({Errormessage: "Can't find Car"})
   }
   return res.send({UniqueCar: getUnique})
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
async function update(req, res){
    const updateCar = await car.findByIdAndUpdate({_id: req.params.id}, {
        carName: req.body.carName,
         YearOfProduction: req.body.YearOfProduction,
         carModel: req.body.carModel,
         carColor:req.body.carColor
    })
    res.send({data: updateCar})
}

//Delete car by id
async function del(req, res){
    const del = await car.findByIdAndRemove({_id: req.params.id})
  res.send({data: "Delete successful"})
}
 

module.exports={
    addCar: addCar,
    getCars: getCars,
    update: update,
    del: del,
    uniqueCar: uniqueCar
}
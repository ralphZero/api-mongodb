//import mongoose
const mongoose = require('mongoose');

//creating schema
const schema = mongoose.Schema({
    carName: {
        type: String
    },
    YearOfProduction: {
        type: Number
    },
    carModel: {
        type: Number
    },
    carColor: {
        type: String
    }
})

//exporting model
module.exports= mongoose.model('schema', schema)
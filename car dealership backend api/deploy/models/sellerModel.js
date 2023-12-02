const mongoose = require("mongoose");

const soldCarSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, "A car must have model"],
    trim: true,
  },
  brand: {
    type: String,
    required: [true, "A car must have brand"],
    trim: true,
  },
  dateOfPurchase: {
    type: Date,
    required: [true, "A car must have dateOfPurchase"],
  },
  mileage: {
    type: Number,
    required: [true, "A car must have mileage"],
    trim: true,
  },
  carType: {
    type: String,
    required: [true, "A car must have type"],
    trim: true,
  },
  driveMode: {
    type: String,
    required: [true, "A car must have driveMode"],
    trim: true,
  },
  fuelType: {
    type: String,
    required: [true, "A car must have fuelType"],
    trim: true,
  },
  maxSpeed: {
    type: String,
    required: [true, "A car must have maxSpeed"],
    trim: true,
  },
  fullCarExteriorImg: {
    type: String,
    required: [true, "A car must have fullCarExteriorImg"],
    trim: true,
  },
  interiorDahboardImg: {
    type: String,
    required: [true, "A car must have interiorDahboardImg"],
    trim: true,
  },
  interior1Img: {
    type: String,
    required: [true, "A car must have interior1Img"],
    trim: true,
  },
  interior2Img: {
    type: String,
    required: [true, "A car must have interior2Img"],
    trim: true,
  },
  engineImg: {
    type: String,
    required: [true, "A car must have engineImg"],
    trim: true,
  },
  yourIdImg: {
    type: String,
    required: [true, "you must have yourIdImg"],
    trim: true,
  },
  carRegistrationImg: {
    type: String,
    required: [true, "you must have carRegistrationImg"],
    trim: true,
  },
});

const SoldCar = mongoose.model("SoldCar", soldCarSchema);
module.exports = SoldCar;

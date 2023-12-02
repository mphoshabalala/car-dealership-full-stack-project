const Car = require("../../models/carModel");

exports.getAllCars = async (req, res, next) => {
  const cars = await Car.find();
  res.status(200).json({
    status: "success",
    data: {
      cars,
    },
  });
};

exports.getAllSUVs = async (req, res, next) => {
  const cars = await Car.find({ type: "SUV" });
  res.status(200).json({
    status: "success",
    data: {
      cars,
    },
  });
};

exports.getAllSedans = async (req, res, next) => {
  const cars = await Car.find({ type: "sedan" });
  res.status(200).json({
    status: "success",
    data: {
      cars,
    },
  });
};

exports.getAllTrucks = async (req, res, next) => {
  const cars = await Car.find({ type: "truck" });
  res.status(200).json({
    status: "success",
    data: {
      cars,
    },
  });
};

exports.getAllVans = async (req, res, next) => {
  const cars = await Car.find({ type: "van" });
  res.status(200).json({
    status: "success",
    data: {
      cars,
    },
  });
};

exports.getCar = async (req, res, next) => {
  // console.log(req.params.id);
  //   get a car based on request parameters
  const car = await Car.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      car,
    },
  });
};

exports.postCar = async (req, res, next) => {
  const newCar = await Car.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      car: newCar,
    },
  });
};

exports.updateCar = async (req, res, next) => {
  const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!car) {
    return new Error("No car found with that ID", 404);
  }
  res.status(200).json({
    status: "success",
    data: {
      car,
    },
  });
};

exports.deleteCar = async (req, res, next) => {
  const car = await Car.findByIdAndDelete(req.params.id);
  if (!car) {
    return new Error("No car found with that ID", 404);
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};

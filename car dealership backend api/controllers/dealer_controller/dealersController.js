const Dealership = require("../../models/dealerModel");

exports.getAllDealers = async (req, res, next) => {
  const dealers = await Dealership.find();
  res.status(200).json({
    status: "success",
    data: {
      dealers,
    },
  });
};

exports.getDealer = async (req, res, next) => {
  //   get a car based on request parameters
  const dealer = await Dealership.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      dealer,
    },
  });
};

exports.postDealer = async (req, res, next) => {
  const newDealer = await Dealership.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      dealer: newDealer,
    },
  });
};

exports.updateDealer = async (req, res, next) => {
  const dealer = await Dealership.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!dealer) {
    return new Error("No dealer found with that ID", 404);
  }
  res.status(200).json({
    status: "success",
    data: {
      dealer,
    },
  });
};

exports.deleteDealer = async (req, res, next) => {
  const dealer = await Dealership.findByIdAndDelete(req.params.id);
  if (!dealer) {
    return new Error("No dealer found with that ID", 404);
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};

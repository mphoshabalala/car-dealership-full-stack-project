const Buyer = require("../../models/buyerModel");

exports.getAllBuyers = async (req, res, next) => {
  const buyers = await Buyer.find();
  res.status(200).json({
    status: "success",
    data: {
      buyers,
    },
  });
};

exports.getBuyer = async (req, res, next) => {
  const buyer = await Buyer.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      buyer,
    },
  });
};

exports.postBuyer = async (req, res, next) => {
  const newBuyer = await Buyer.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      buyer: newBuyer,
    },
  });
};

exports.updateBuyer = async (req, res, next) => {
  const buyer = await Buyer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!buyer) {
    return new Error("No buyer found with that ID", 404);
  }

  res.status(200).json({
    status: "success",
    data: {
      buyer,
    },
  });
};

exports.deleteBuyer = async (req, res, next) => {
  const buyer = await Buyer.findByIdAndDelete(req.params.id);
  if (!buyer) {
    return new Error("No buyer found with that id", 404);
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
};

const Order = require("../../models/orderModel");

exports.getAllOrders = async (req, res, next) => {
  const orders = await Order.find();
  res.status(200).json({
    status: "success",
    data: {
      orders,
    },
  });
};

exports.getOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
};

exports.postOrder = async (req, res, next) => {
  const newOrder = await Order.create(req.body);
  if (!newOrder) {
    throw new Error("Order was not succesfully made", 404);
  }
  res.status(200).json({
    status: "success",
    data: {
      order: newOrder,
    },
  });
};

exports.updateOrder = async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!order) {
    throw new Error("Order was not succesfully made", 404);
  }

  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
};

exports.deleteOrder = async (req, res, json) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (!order) {
    return new Error("No car found with that ID", 404);
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};

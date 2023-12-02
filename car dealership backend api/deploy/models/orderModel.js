const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contacts: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  carId: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;

const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const buyerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A buyer must have a name"],
    trim: true,
  },
  contacts: {
    type: String,
    required: [true, "A buyer must provide his contacts"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "A buyer must provide the email"],
  },
  fromDate: {
    type: Date,
    required: [
      true,
      "A buyer must provide a date from which he/she will be available",
    ],
  },
  toDate: {
    type: Date,
    required: [
      true,
      "A buyer must provide a date to which he/she will be available",
    ],
  },
  brand: {
    type: String,
    required: [
      true,
      "brand should be automatically collected from the database",
    ],
  },
  model: {
    type: String,
    required: [
      true,
      "model should be automatically collected from the database",
    ],
  },
});

const Buyer = mongoose.model("buyer", buyerSchema);
module.exports = Buyer;

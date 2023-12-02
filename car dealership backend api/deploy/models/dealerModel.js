const mongoose = require("mongoose");

const dealerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "A dealer must have a company which has a name"],
    trim: true,
  },
  owner: {
    type: String,
    required: [true, "A company must have an owner"],
    trim: true,
  },
  dealerImg: {
    type: String,
    required: [true, "A dealer must be identifieble by an image"],
    trim: true,
  },
  logoImg: {
    type: String,
    required: [true, "A dealer must be identifieble by a logo"],
    trim: true,
  },
  slogan: {
    type: String,
    required: [true, "A dealership must have a slogan"],
    trim: true,
  },

  dealerLocation: {
    type: String,
    required: [true, "The company head quaters must be somewhere"],
    trim: true,
  },

  dealershipInformation: {
    type: String,
    required: [true, "A company must have a information to tell"],
  },
  weeklyOpenTime: {
    type: Date,
    required: [true, "A dealership must have a weekly open time"],
  },
  weeklyCloseTime: {
    type: Date,
    required: [true, "A dealership must have a weekly close time"],
  },

  weekendOpenTime: {
    type: Date,
    required: [true, "A dealership must have a weekend open time"],
  },

  weekendCloseTime: {
    type: Date,
    required: [true, "A dealership must have a weekend close time"],
  },
});

const DealerShip = mongoose.model("Dealership", dealerSchema);
module.exports = DealerShip;

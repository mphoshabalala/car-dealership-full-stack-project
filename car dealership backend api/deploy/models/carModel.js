const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, "A car must have brand"],
    trim: true,
  },
  model: {
    type: String,
    required: [true, " A car must have model"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "A car must have a year of purchase"],
    trim: true,
  },

  mileageLeft: {
    type: Number,
    required: [true, "A car must have a milage travelled"],
    trim: true,
  },
  type: {
    type: String,
    required: [true, "A car must be of a certain type"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "A car must have a price"],
    trim: true,
  },
  sellerCompany: {
    type: String,
    required: [true, "A car must be sold by a certain company"],
    trim: true,
  },
  images: {
    type: [String],
  },
  color: {
    type: String,
    required: [true, "A car must have a color"],
    trim: true,
  },
  driveMode: {
    type: String,
    required: [true, "A car must have a drive type"],
    enum: {
      values: ["manual", "automatic"],
      message: "A car can have automatic or manual drive mode",
    },
  },
  fuelType: {
    type: String,
    required: [true, "A car must be fueled in some way"],
    enum: {
      values: ["petrol", "diesel", "electric"],
      message: "A car either uses petrol, diesel, or electric",
    },
  },
  engineDetail: {
    type: String,
    required: [true, "A car must have engine detail"],
    trim: true,
  },
  engineCapacityLitre: {
    type: String,
    required: [true, "A car must have engine capacity in litres"],
    trim: true,
  },

  fuelCapacity: {
    type: String,
    required: [true, "A car must have fuel capacity in litres"],
    trim: true,
  },

  fuelConsumptionAverage: {
    type: String,
    required: [true, "A car must have fuel consumption average in km/litres"],
    trim: true,
  },

  fuelRangeAverage: {
    type: String,
    required: [true, "A car must have fuel range average in "],
    trim: true,
  },

  acceleration0100Kmh: {
    type: Number,
    required: [true, "A car must have acceleration per 100km "],
    trim: true,
  },

  maximumTopSpeed: {
    type: Number,
    required: [true, "A car must have maximum top speed"],
    trim: true,
  },

  electricWindows: {
    type: String,
    enum: {
      values: ["standard", "N/A", "not working"],
      message:
        "A car must have electric windows status as either standard, N/A or not working",
    },
  },

  sunroof: {
    type: String,
    enum: {
      values: ["standard", "N/A"],
      message:
        "A car must have sunroof status as either standard, N/A or not working",
    },
  },

  airConditioning: {
    type: String,
    enum: {
      values: ["standard", "N/A"],
      message:
        "A car must have air conditioning status as either standard, N/A or not working",
    },
  },

  bluetoothConnectivity: {
    type: String,
    enum: {
      values: ["standard", "N/A", "not working"],
      message:
        "A car must have bluetooth connectivity status as either standard, N/A or not working",
    },
  },

  usbPort: {
    type: String,
    enum: {
      values: ["standard", "N/A", "not working"],
      message:
        "A car must have usbPort status as either standard, N/A or not working",
    },
  },

  multiFunctionSteeringWheelControls: {
    type: String,
    enum: {
      values: ["standard", "N/A", "not working"],
      message:
        "A car must have multiFunctionSteeringWheelControls status as either standard, N/A or not working",
    },
  },

  airbagQuantity: {
    type: Number,
    required: [true, "A car must have a airbag quantity"],
    trim: true,
  },

  remoteCentralLocking: {
    type: String,
    enum: {
      values: ["standard", "N/A", "not working"],
      message:
        "A car must have remoteCentralLocking status as either standard, N/A or not working",
    },
  },

  tyrePressureSensor: {
    type: String,
    enum: {
      values: ["standard", "N/A", "not working"],
      message:
        "A car must have tyrePressureSensor status as either standard, N/A or not working",
    },
  },
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;

const SoldCar = require("../../models/sellerModel");
const multer = require("multer");

exports.getAllSoldCars = async (req, res, next) => {
  const sellerInfo = await SoldCar.find();
  res.status(200).json({
    status: "success",
    data: {
      sellerInfo,
    },
  });
};

exports.getSoldCar = async (req, res, next) => {
  const sellerInfo = await SoldCar.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      sellerInfo,
    },
  });
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.postSoldCar = async (req, res, next) => {
  const data = await req.body;
  const newSellerInfo = await SoldCar.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      car: newSellerInfo,
    },
  });
};

exports.updateSoldCar = async (req, res, next) => {
  const updatedSoldCar = await SoldCar.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedSoldCar) {
    return Error("No sold car found with that ID", 404);
  }
  res.status(200).json({
    status: "success",
    data: {
      updatedSoldCar,
    },
  });
};

exports.deleteSoldCar = async (req, res, next) => {
  const sellerInfo = await SoldCar.findByIdAndDelete(req.params.id);
  if (!sellerInfo) {
    return new Error("No sellerInfo found with that ID", 404);
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};

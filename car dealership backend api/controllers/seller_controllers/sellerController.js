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
    cb(null, "../../../secondhand car dealership frontend/src/sellerFiles/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadFiles = multer({ storage: storage });

(exports.postSoldCar = uploadFiles.array(
  "fullCarExteriorImg interiorDahboardImg interior1Img interior2Img engineImg yourIdImg carRegistrationImg",
  7
)),
  async (req, res, next) => {
    if (!req.files) {
      return res.status(400).send("No files uploaded");
    }

    const uploadedFiles = req.files;
    const data = req.body;

    const savedFiles = await Promise.all(
      uploadedFiles.map(async (file) => {
        const savedFile = new SoldCar({ ...data, [file.fieldname]: file.path });
        return savedFile.save();
      })
    );
    res.send("Files uploaded and data saved successfully.");
  };

exports.updateSoldCar = async (req, res, next) => {
  const sellerInfo = await SoldCar.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!sellerInfo) {
    return new Error("No sellerInfo found with that ID", 404);
  }
  res.status(200).json({
    status: "success",
    data: {
      sellerInfo,
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

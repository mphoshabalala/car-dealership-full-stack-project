const express = require("express");
const sellerController = require("../../controllers/seller_controllers/sellerController");

const router = express.Router();

router
  .route("/")
  .post(sellerController.getAllSoldCars)
  .get(sellerController.postSoldCar);

router
  .route("/:id")
  .get(sellerController.getSoldCar)
  .patch(sellerController.updateSoldCar)
  .delete(sellerController.deleteSoldCar);

module.exports = router;

const express = require("express");
const dealersController = require("../../controllers/dealer_controller/dealersController");

const router = express.Router();

router
  .route("/")
  .post(dealersController.postDealer)
  .get(dealersController.getAllDealers);

router
  .route("/:id")
  .get(dealersController.getDealer)
  .patch(dealersController.updateDealer)
  .delete(dealersController.deleteDealer);

module.exports = router;

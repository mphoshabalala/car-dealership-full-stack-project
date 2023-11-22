const express = require("express");
const buyerController = require("../../controllers/buyer_controller/buyerContoller");

const router = express.Router();

router
  .route("/")
  .get(buyerController.getAllBuyers)
  .post(buyerController.postBuyer);

router
  .route("/:id")
  .get(buyerController.getBuyer)
  .patch(buyerController.updateBuyer)
  .delete(buyerController.deleteBuyer);

module.exports = router;

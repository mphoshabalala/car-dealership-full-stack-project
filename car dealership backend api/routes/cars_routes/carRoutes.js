const express = require("express");
const carsController = require("../../controllers/car_controllers/carsController");

const router = express.Router();

router.route("/").post(carsController.postCar).get(carsController.getAllCars);
router.route("/SUVs").get(carsController.getAllSUVs);
router.route("/trucks").get(carsController.getAllTrucks);
router.route("/sedans").get(carsController.getAllSedans);
router.route("/vans").get(carsController.getAllVans);

router
  .route("/:id")
  .get(carsController.getCar)
  .patch(carsController.updateCar)
  .delete(carsController.deleteCar);

module.exports = router;

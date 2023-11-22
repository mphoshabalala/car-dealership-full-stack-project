const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const carsRouter = require("./routes/cars_routes/carRoutes");
const dealerRouter = require("./routes/dealers_routes/dealerRoutes");
const sellersRouter = require("./routes/sellers_routes/sellerRoutes");
const buyerRouter = require("./routes/buyer_routes/buyerRoutes");

const app = express();
app.use(cors({ origin: "*" }));
// Increase payload size for JSON requests
app.use(express.json({ limit: "50mb" })); // Adjust the limit as needed

// Increase payload size for form data
app.use(express.urlencoded({ limit: "50mb", extended: true })); // Adjust the limit as needed
// use morgan during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//use express json formatter middleware
app.use(express.json());

// block chrome favicon router
app.use("/favicon.ico", (req, res) => {
  res.status(404).end();
});

app.use("/api/v1/cars", carsRouter);
app.use("/api/v1/dealers", dealerRouter);
app.use("/api/v1/sellers", sellersRouter);
app.use("/api/v1/buyers", buyerRouter);
// app.all("*", (req, res, next) => {
//   next(new Error(`Can't find ${req.originalUrl} on the server`, 404));
// });

// catch all the pages that are not available
// app.all("*", (req, res, next) => {
//   res.status(404).json({
//     response: "The resource does not exist",
//   });
// });

module.exports = app;

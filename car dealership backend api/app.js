const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const carsRouter = require("./routes/cars_routes/carRoutes");
const dealerRouter = require("./routes/dealers_routes/dealerRoutes");

const app = express();
app.use(cors({ origin: "*" }));

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
app.all("*", (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on the server`, 404));
});

// catch all the pages that are not available
// app.all('*', (req, res, next) => {

// })

module.exports = app;

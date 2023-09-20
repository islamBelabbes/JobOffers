const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const corsOptions = require("./src/config/cors.config").corsOptions;
const app = express();
const errorHandler = require("./src/middleware/errorHandler.Middleware");

// cors //
app.use(cors(corsOptions));

// json //
app.use(express.json());

// MongoDB connection START //
const dbConnect = require("./src/config/DbConnect");
dbConnect();

// routes //
const companyRoute = require("./src/Routes/company.Route");
const jobsRoute = require("./src/Routes/jobs.Route");
const marketingRoute = require("./src/Routes/marketing.Route");
// const userRoute = require("./src/Routes/user.Route");
const webhookRoute = require("./src/Routes/webhook.Route");

// register routes //
app.use("/jobs", jobsRoute);
app.use("/company", companyRoute);
app.use("/webhooks", webhookRoute);
app.use("/marketing", marketingRoute);

// 404 pages //
app.use("*", (req, res) => {
  res.send("404 Not Found");
});

// error handler //
app.use(errorHandler);

// listen to db connection event to run the server on port //

const port = 5000;

mongoose.connection.once("open", () => {
  console.log("connection to MongoDB");
  app.listen(port, () => {
    console.log("listening on port " + port);
  });
});

const express = require("express");
require("dotenv").config();
const router = express.Router();
const marketingController = require("../controller/marketing.Controller");
const errorHandler = require("../middleware/errorHandler.Middleware");
router.post(
  "/emails/subscribe",
  marketingController.mailChimpSubscription,
  errorHandler
);

module.exports = router;

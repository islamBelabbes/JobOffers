const express = require("express");
const router = express.Router();
const webhookController = require("../controller/webhook.Controller");
const errorHandler = require("../middleware/errorHandler.Middleware");

// clerk
router.post("/clerk", webhookController.clerkProcess, errorHandler);

module.exports = router;

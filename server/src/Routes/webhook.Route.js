const express = require("express");
const router = express.Router();
const clerkProcess = require("../controller/clerk.Controller");
const errorHandler = require("../middleware/errorHandler.Middleware");

// clerk
router.post("/clerk", clerkProcess, errorHandler);

module.exports = router;

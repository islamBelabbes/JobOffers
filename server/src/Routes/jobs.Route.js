const express = require("express");
const router = express.Router();
const jobsController = require("../controller/jobs.Controller");
const auth = require("../middleware/auth");

router.get("/", auth, jobsController.getJobs);

module.exports = router;

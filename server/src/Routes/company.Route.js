const express = require("express");
const router = express.Router();
const companyController = require("../controller/company.Controller");

router.get("/", companyController.getCompany);

module.exports = router;

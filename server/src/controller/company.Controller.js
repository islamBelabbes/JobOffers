const Company = require("../model/company.Model"); // Import the Company model

const getCompany = async (req, res) => {
  res.send("nice");
};

module.exports = {
  getCompany,
};

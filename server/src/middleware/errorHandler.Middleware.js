const response = require("../helpers/response.Helper");
const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  if (err?.message === "401") {
    return response.sendUnauthorized(res);
  }
  response.sendServerError(res);
};

module.exports = errorHandler;

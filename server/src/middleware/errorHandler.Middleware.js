const response = require("../helpers/response.Helper");
const errorHandler = (err, req, res, next) => {
  if (err?.status === 401) {
    return response.sendUnauthorized(res);
  }
  if (err?.status === 400) {
    return response.sendBadRequest(res, err?.message || "Bad Request");
  }
  if (err?.status === 409) {
    return response.sendConflict(res, err?.message || "Conflict");
  }
  response.sendServerError(res);
};

module.exports = errorHandler;

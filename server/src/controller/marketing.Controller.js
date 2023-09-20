const mailChimp = require("../lib/mailChimp");
const response = require("../helpers/response.Helper");
const mailChimpSubscription = async (req, res, next) => {
  try {
    const data = await mailChimp.addListMember(req.body);
    response.sendCreated(res, {
      message: "You have successfully subscribed to our newsletter",
      data,
    });
  } catch (err) {
    if (JSON.parse(err?.response?.text)?.title === "Member Exists") {
      const error = new Error("You are already subscribed");
      error.status = 409;
      return next(error);
    }
    next(err);
  }
};

module.exports = {
  mailChimpSubscription,
};

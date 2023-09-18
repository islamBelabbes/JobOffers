const userController = require("../controller/user.Controller");
const clerkWebHookHandler = require("../lib/clerk/webhooks");
const response = require("../helpers/response.Helper");

const clerkProcess = async (req, res, next) => {
  const { data } = req.body;
  let type;
  try {
    type = await clerkWebHookHandler(req.body, req.headers);
  } catch (err) {
    next(err);
  }

  // all good lets continue

  if (type === "user.created") {
    const options = {
      username: data?.username,
      first_name: data?.first_name,
      last_name: data?.last_name,
      email: data?.email_addresses[0].email_address,
      avatar: data?.image_url,
      phone: data?.phone_numbers[0]?.phone_number,
      id: data?.id,
    };
    try {
      await userController.CreateUser(options);
      return response.sendCreated(res);
    } catch (err) {
      next(err);
    }
  }

  // if we don't want to target the event just skip and send 200
  response.sendOk(res);
};

module.exports = clerkProcess;

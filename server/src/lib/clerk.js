const svix = require("svix").Webhook;
require("dotenv").config();

const clerkWebHookHandler = async (body, headers) => {
  const { object, type } = body;

  // lets verify that the webhook is really coming from clerk
  try {
    const webhook = new svix(process.env.SVIX_SECRET);
    await webhook.verify(JSON.stringify(body), headers);
  } catch (err) {
    const CustomError = new Error("Unauthorized"); // Create a new error object
    CustomError.status = 401; // Set the status code on the error object
    throw CustomError;
  }

  // all good ... process

  if (object === "event") {
    return type;
  }
  throw new Error("no event was sent");
};

module.exports = clerkWebHookHandler;

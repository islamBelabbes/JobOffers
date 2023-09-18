const svix = require("svix").Webhook;
require("dotenv").config();

const clerkWebHookHandler = async (body, headers) => {
  const { object, type } = body;

  // lets verify that the webhook is really coming from clerk
  try {
    const webhook = new svix(process.env.SVIX_SECRET);
    await webhook.verify(JSON.stringify(body), headers);
  } catch (err) {
    throw new Error(401);
  }

  // all good ... process

  if (object === "event") {
    return type;
  }
  throw new Error("no event was sent");
};

module.exports = clerkWebHookHandler;

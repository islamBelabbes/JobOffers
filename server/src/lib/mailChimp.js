const mailChimp = require("@mailchimp/mailchimp_marketing");
require("dotenv").config;

const mainChimpConfig = mailChimp.setConfig({
  apiKey: process.env.MAILCHIMP,
  server: process.env.MAILCHIMP_PREFIX,
});

const listId = process.env.MAILCHIMP_LIST_ID;

const addListMember = async (body) => {
  const { email, first_name, last_name } = body;
  try {
    const data = await mailChimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: first_name,
        LNAME: last_name,
      },
    });

    return data;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  mainChimpConfig,
  listId,
  addListMember,
};

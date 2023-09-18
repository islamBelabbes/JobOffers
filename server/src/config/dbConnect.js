require("dotenv").config();
const mongoose = require("mongoose");
async function dbConnect() {
  try {
    await mongoose.connect(process.env.DB, {
      useunifiedtopology: true,
      useNewurlParser: true,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = dbConnect;

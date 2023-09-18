const cloudinary = require("cloudinary").v2;
const CloudinaryConfig = require("../lib/Cloudinary/Clouinary.config");

const mediaUpload = async (req, res, next) => {
  const { aiattachment } = req.body;
  try {
    const data = await cloudinary.uploader.upload(aiattachment);
    req.body.aiattachment = data.secure_url;
    next();
  } catch (err) {
    res.stats(520).send("unknown error while uploading");
  }
};

module.exports = mediaUpload;

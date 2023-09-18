const userModal = require("../model/user.Model");
const CreateUser = async (data) => {
  // get the user modal data from the param object
  const { username, first_name, last_name, email, avatar, phone, id } = data;

  // start creating the user
  const options = {
    username,
    first_name,
    last_name,
    email,
    avatar,
    phone,
    clerk: { id },
  };
  // new Document
  const User = new userModal(options);

  try {
    // save the user in Db
    await User.save();
  } catch (err) {
    throw err;
  }
};
module.exports = {
  CreateUser,
};

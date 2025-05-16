const UserModel = require("./../database/schemas/user.schema");

async function addUser(userData) {
  try {
    const User = new UserModel(userData);
    await User.save();
    return "User Created Successfully";
  } catch (error) {
    console.trace(error);
    throw error;
  }
}

async function getUsers() {
  try {
    return UserModel.find({}).select({ password: 0 });
  } catch (error) {
    console.trace(error);
    throw error;
  }
}

module.exports = {
  addUser,
  getUsers,
};

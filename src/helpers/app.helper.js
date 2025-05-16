const users = [];

function addUser(userData) {
  users.push(userData);
  return userData;
}

function getUsers() {
  return users;
}

module.exports = {
  addUser,
  getUsers,
};

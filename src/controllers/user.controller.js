/******************
 * Helpers
 ******************/
const { addUser, getUsers } = require("../helpers/user.helper");

/******************
 * Tokens
 ******************/
const { STATUS_CODES } = require("./../tokens/status.token");

/************************
 * Controller functions
 ************************/
async function createUser(req, res) {
  try {
    const userObj = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    const createdUser = await addUser(userObj);
    res.status(STATUS_CODES.CREATED).send(createdUser);
  } catch (error) {
    console.trace(error);
    res.send(STATUS_CODES.INTERNAL_SERVER_ERROR);
  }
}

async function users(req, res) {
  try {
    const users = await getUsers();
    res.send(users).status(STATUS_CODES.OK);
  } catch (error) {
    console.trace(error);
    res.send(STATUS_CODES.INTERNAL_SERVER_ERROR);
  }
}

module.exports = { createUser, users };

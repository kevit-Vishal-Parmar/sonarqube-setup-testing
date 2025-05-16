/************************
 * 3rd party libraries
 ************************/
const express = require("express");
const Router = express.Router();

/************************
 * Controllers
 ************************/
const { userController } = require("../controllers/index.js");

/************************
 * Middelwares
 ************************/
const CatchError = require("./../middlewares/error.middelware.js");

/************************
 * Validatores
 ************************/
const { createUserValidator } = require("./../validators/user.validator");

Router.post(
  "/create",
  createUserValidator,
  CatchError,
  userController.createUser
);
Router.get("/list", userController.users);

module.exports = Router;

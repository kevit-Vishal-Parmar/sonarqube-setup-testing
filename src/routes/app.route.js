const express = require("express");
const Router = express.Router();
const { appController } = require("../controllers/index.js");
const { appValidator } = require("../validators/app.validator.js");

Router.get("/health", appValidator, appController.checkAppHealth);

module.exports = Router;

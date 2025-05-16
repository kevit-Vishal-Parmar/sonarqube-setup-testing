/************************
 * 3rd party libraries
 ************************/
const Router = require("express").Router();

/******************
 * Routes
 ******************/
const appRoutes = require("./app.route");
const userRoutes = require("./user.route");

/******************
 * configurations
 ******************/
Router.use("/app", appRoutes);
Router.use("/user", userRoutes);

module.exports = Router;

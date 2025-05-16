/************************
 * 3rd party libraries
 ************************/
const Express = require("express");
const app = Express();
const bodyParser = require("body-parser");
const dotEnv = require("dotenv");

/******************
 * Routes
 ******************/
const routes = require("./routes/index");
const { body } = require("express-validator");
/******************
 * configurations
 ******************/
dotEnv.config();
app.use(bodyParser.json());
app.use("/api", routes);

module.exports = app;

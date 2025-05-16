/************************
 * 3rd party libraries
 ************************/
const mongoose = require("mongoose");

/************************
 * config
 ************************/
const dbConfig = require("./../config/database.config");

/************************
 * Schemas
 ************************/
require("./schemas/user.schema");
/************************
 * Listeners
 ************************/
mongoose.connection.on("error", (e) => {
  console.log("Error while connecting database", e);
});

mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("Database connected!");
});

/************************
 * Database connection
 ************************/
module.exports = mongoose.connect(dbConfig.DB_URL);

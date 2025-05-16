const appConfig = require("./src/config/app.config");
const app = require("./src/app");
const databaseConnection = require("./src/database/db");

databaseConnection.then(() => {
  app.listen(appConfig.PORT, () => {
    console.log(`Application listen on ${appConfig.PORT}`);
  });
});

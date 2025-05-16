const appConfig = Object.freeze({
  PORT: process.env.PORT || 3000,
  ENV: process.env.ENV || "local",
  APP_NAME: process.env.APP_NAME || "Node Jump Start",
});

module.exports = appConfig;

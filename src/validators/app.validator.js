const { body, param } = require("express-validator");

const appValidator = [
  param("text").isString().notEmpty().withMessage("text is required!"),
];

module.exports = {
  appValidator,
};

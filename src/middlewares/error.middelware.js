/************************
 * 3rd party libraries
 ************************/
const { validationResult, matchedData } = require("express-validator");

/************************
 * Tokens
 ************************/
const { STATUS_CODES } = require("./../tokens/status.token");

module.exports = function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(STATUS_CODES.BAD_REQUEST).json(JSON.stringify(errors));
  }

  req.body = matchedData(req, { onlyValidData: true, locations: ["body"] });
  req.params = matchedData(req, { onlyValidData: true, locations: ["params"] });
  req.query = matchedData(req, { onlyValidData: true, locations: ["query"] });

  next();
};

/******************
 * Helpers
 ******************/

/************************
 * Controller functions
 ************************/
function checkAppHealth(req, res) {
  res.json({
    health: "good",
    time: Date.now(),
  });
}

module.exports = { checkAppHealth };

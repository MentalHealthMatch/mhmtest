const classes = require("./classData");

async function getClasses(req, res) {
  try {
    res.status(200).json(classes);
  } catch (err) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
}
module.exports = { getClasses };

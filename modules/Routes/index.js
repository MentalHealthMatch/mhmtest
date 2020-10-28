


var express = require("express");
var router = express.Router();

var database = require("DB");

// function createLastNameLookup(array) {
//   const returnValue = {};
//   for (let i = 0; i < array.length; i++) {
//     const next = array[i];
//     returnValue[next.id] = next.last;
//   }
//   return returnValue;
// }


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "🌴" });
});
//
// router.get("/listallclasses", async function (req, res) {
//   res.json(database.getAllClasses());
// });






module.exports = router;

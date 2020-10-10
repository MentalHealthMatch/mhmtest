var express = require("express");
const databaseAccess = require("./databaseAccess");
var router = express.Router();
var database = require("./databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "MH Test", viewUsr:"/listAllUsers", viewClss:"/listallclasses" });
});

router.get("/listAllUsers", getUsers);

router.get("/listallclasses", listallclasses);

module.exports = router;

async function getUsers(req, res) {
  let userNames = await database.getUsers();
  // for (let i = 0; i < userNames.length; i++) {
  //   const userName = userNames[i];
  //   let lastNames = await database.getLastNames();
  //   const lastNameLookup = createLastNameLookup(lastNames);
  //   const userNameId = userName.id;
  //   const last = lastNameLookup[userNameId];
  //   userName.last = last;
  // }
  // res.write(makeTableHTML(userNames))
  res.render('listallusers', { title: 'USERS' , users: userNames });
  // res.json(userNames);
  res.end()
}
//
// function createLastNameLookup(array) {
//   const returnUserLastName = {};
//   for (let i = 0; i < array.length; i++) {
//     const userLastName = array[i];
//     returnUserLastName[userLastName.id] = userLastName.last;
//   }
//   return returnUserLastName;
// }



async function listallclasses(req, res) {
  let classes = await database.getAllClasses();
  // res.json(databaseAccess.getAllClasses());
  res.render('listallclasses', { title: 'CLASESS', classlist: classes });
  // res.end()
}

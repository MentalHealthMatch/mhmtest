var router = require("express").Router();
var usersRouter = require('../routes/users');
var classRouter = require('../routes/classes');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.route("/users")
      .get(usersRouter.getUsers)
      .post(usersRouter.createUsers);

router.route("/classes")
      .get(classRouter.listallclasses);

module.exports = router;
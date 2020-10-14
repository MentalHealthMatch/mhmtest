const express = require("express");

const indexesRouter = express.Router();

/* GET home page. */
indexesRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = indexesRouter;


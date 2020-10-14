const express = require("express");

const viewsRouter = express.Router();

/* GET home page. */
viewsRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = viewsRouter;


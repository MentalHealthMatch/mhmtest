const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors"); // cross origin resource sharing support 

// bring in data abstraction layer
const dal = require("./data/dal");

// put api in own router to seperate concerns.  make a folder for each version
// routes should not match the location on the server.  I allow it here for ease of understanding

// api routes
const apiRouter = require("./routes/api/v1/api");
const apiUserRouter = require("./routes/api/v1/apiUsers");
const apiClassRouter = require("./routes/api/v1/apiClasses");

// html routes
const indexRouter = require("./routes/view/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");  // "jade has be depricated and renamed to pug"

// cors needs to be at the top
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// set up html page routes
app.use("/", indexRouter);

// try to connect to the database
dal.connect()
  .then(db => {

    // put db access object on locals
    app.locals.db = db

  })
  .catch(fail => {

    // replace database functions with error functions
    app.locals.db = fail.errorFunctions

    // log the error
    console.log(fail.error.message)

    // signal an alarm
    // get IT on it.

  })
  .finally(() => {

    // set up api route
    app.use("/api/v1", apiRouter);
    app.use("/api/v1/users", apiUserRouter);
    app.use("/api/v1/classes", apiClassRouter);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
      next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render("error");
    });

    // allow ending of process with ^C
    process.on("SIGINT", () => {
      dal.close()
      process.exit()
    })

  })

module.exports = app;

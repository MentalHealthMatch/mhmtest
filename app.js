const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const installRoutes = require('./routes');
const errorHandler = require('./routes/middlewares/error');

/**
 * App Variables
 */
const app = express();

/**
 *  App Configuration
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // NOTE: this could be removed (along with the package) as it isn't being used as of now; but I did not remove it because a cookie parser will probably be used when more functionality is added
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes Installation
 */
installRoutes(app);

/**
 * Error Handling Middlewares (Fallback)
 */
app.use(function(req, res, next) {
  // catch all other routes and forward a 404 error to error handler
  next(createError(404));
});
app.use(errorHandler);

module.exports = app;

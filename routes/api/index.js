const createError = require('http-errors');

const userRouter = require('./users.routes');
const classRouter = require('./classes.routes');

const install = function (app) {
    app.use('/api/users', userRouter);
    app.use('/api/classes', classRouter);
    app.use('/api/*', function(req, res, next) {
        res.status(401);
        res.send(createError.BadRequest());
    });
};

module.exports = install;

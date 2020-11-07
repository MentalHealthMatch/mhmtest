const installApplicationRoutes = require('./app.routes');
const installAPIRoutes = require('./api');

const installRoutes = function (app) {
  installApplicationRoutes(app);
  installAPIRoutes(app);
};

module.exports = installRoutes;

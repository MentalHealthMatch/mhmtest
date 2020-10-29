

module.exports = function ({
	Port,
	Locations
}){
	var app = require ('express') ();

	app.set ('views', Locations.Templates);
	app.set ('view engine', 'ejs');

	app.use (require ('express').json ());
	app.use (require ('express').urlencoded ({ extended: false }));
	app.use (require ('cookie-parser') ());
	app.use ("/&", require ('express').static (
		Locations.Public
	));

	require ("Routes/Load") ({
		Routes: require ("Routes"),
		App: app
	});

	// catch 404 and forward to error handler
	app.use (function (req, res, next) {
		next (require ('http-errors') (404));
	});

	// error handler
	app.use (function (err, req, res, next) {
		console.error (err);

		res.status (err.status || 500);
		res.end ();
	});

	var Port = process.env.PORT || '3000';

	var Station = require ('http').createServer (app);
	Station.listen (Port);
	Station.on ('error', function (error) {
		throw error;
	});
	Station.on ('listening', function () {
		console.log ('The station is open on port ' + Station.address ().port);
	});
}

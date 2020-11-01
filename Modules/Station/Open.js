

module.exports = function ({
	Port,
	Locations
}){
	var express = require ('express');
	var Station = require ('express') ();

	Station.set ('views', Locations.Templates);
	Station.set ('view engine', 'ejs');

	Station.use (require ('express').json ());
	Station.use (require ('express').urlencoded ({ extended: false }));
	Station.use (require ('cookie-parser') ());
	Station.use ("/&", express.static (
		Locations.Public
	));

	console.log ({
		Public: Locations.Public
	})

	Station.all ('*', function (req, res, next) {
		console.log ("[URL]", req.method, req.url);


		next ();
	});

	require ("Routes/Load") ({
		Routes: require ("Routes"),
		App: Station
	});

	Station.all ('*', function (req, res, next) {
		res.statusCode = 404;
		res.write ("not found");
		res.end ();
	});

	// catch 404 and forward to error handler
	Station.use (function (req, res, next) {
		next (require ('http-errors') (404));
	});

	// error handler
	Station.use (function (err, req, res, next) {
		console.error (err);

		res.status (err.status || 500);
		res.end ();
	});

	Station.listen (Port, () => {
		console.log (`Station open at http://localhost:${ Port }`);
	});
}

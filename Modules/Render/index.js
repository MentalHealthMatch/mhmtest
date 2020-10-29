


module.exports = function (Location, Data) {
	require ("ejs").renderFile (Location, Data, {}, function (err, Strand) {
		if (err) {
			res.statusCode = 500;
			res.end ();
			return;
		}

		res.statusCode = 200;
		res.write (Strand);
		res.end ();
	});
}

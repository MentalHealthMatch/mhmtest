

module.exports = function ({
	req,
	res,
	Tab = "🌴 Pacalmo",
	Settings: _Settings
}) {
	var Settings =  require ("lodash/merge") ({}, {
		Title: "Pacalmo"
	}, _Settings);

	require ("axios")
	.post (`http://127.0.0.1:3001`, {
		Settings
	})
	.then (Response => {
		var HTML = require ("lodash/get") (Response, "data", "");

		res.render ("Home", {
			Tab,
			Settings: JSON.stringify (Settings),
			Content: HTML
		});
		res.end ();
	})
	.catch (Throw => {
		console.log ({ Throw });

		res.statusCode = 500;
		res.end ();
	});
}

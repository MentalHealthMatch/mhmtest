

module.exports = function ({
	App,
	Routes
}) {
	/*
		Load the routes from the array of routes
	*/
	Routes.forEach (Route => {
		var { Method: _Method = "GET", Pattern, Middleware, Match } = Route;
		var Method = _Method.toLowerCase ();


		var Parameters = [ Pattern ];
		if (Array.isArray (Middleware)) {
			const Middlewares = [];

			Middleware.forEach (Mid => {
				Middlewares.push ((req, res, next) => {
					Mid ({ req, res, next });
				});
			});

			Parameters.push (Middlewares);
		}
		Parameters.push ((req, res, next) => {
			console.log ("  [Route Found]", req.method, Pattern);

			try {
				var H = Match ({ req, res, next });

				/*
					Generic throw catcher for routes declared with async
				*/
				if (H && H.then && typeof H.then === "function") {
					H.catch (Throw => {
						console.log ("Problem:", { Throw });

						res.statusCode = 500;
						res.write ("A problem occured.");
						res.end ();
					});
				}
			}
			catch (Throw) {
				console.log ("Problem:", { Throw });

				res.statusCode = 500;
				res.write ("A problem occured.");
				res.end ();
			}
		});


		App [ Method ].apply (App, Parameters);
	});
}

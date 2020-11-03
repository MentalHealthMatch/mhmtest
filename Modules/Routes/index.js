

var Routes = [{
	Pattern: "/",
	Match: ({ req, res, next }) => {
		require ("axios")
		.post (`http://127.0.0.1:3001`, {
			Settings: {
				Title: "Pacalmo"
			}
		})
		.then (Response => {
			console.log (Response.data);
			var HTML = require ("lodash/get") (Response, "data", "");

			console.log ({ HTML });

			res.render ("Home", {
				Tab: "🌴 Pacalmo",
				Settings: JSON.stringify ({
					Title: "Pacalmo"
				}),
				Content: HTML
			});
			res.end ();

			// res.statusCode = 200;
			// res.write (HTML);
			// res.end ();
		})
		.catch (Throw => {
			console.log ({ Throw });

			res.statusCode = 500;
			res.end ();
		});
	}
},{
	Pattern: "/*/Sessions",
	Match: async ({ req, res, next }) => {
		var Sessions = await require ("DB/Sessions/List") ();

		console.log ({ Sessions });

		res.render ("Sessions", {
			Tab: "🌴 Pacalmo 🌼 Sessions",
			Title: "Pacalmo",
			Sessions
		});
	}
},{
	Pattern: "/*/Sessions/:Name/:Motif",
	Match: async ({ req, res, next }) => {
		var Name = require ("lodash/get") (req, [ "params", "Name" ], null);
		if (Name === null) {
			res.render ("Session-not-found", {
				Tab: "Session not found",
				Title: "Pacalmo"
			});
			return;
		}

		var Motif = require ("lodash/get") (req, [ "params", "Motif" ], null);
		if (Motif === null) {
			res.render ("Session-not-found", {
				Tab: "Session not found",
				Title: "Pacalmo"
			});
			return;
		}

		var Session = await require ("DB/Sessions/Find") ({
			Name,
			Motif
		});

		if (Session === null) {
			res.render ("Session-not-found", {
				Tab: "Session not found",
				Title: "Pacalmo"
			});
			return;
		}

		res.render ("Session", {
			Tab: `🌼 ${ Name }`,
			Title: "Pacalmo",
			Session
		});
	}
},{
	Pattern: "/*/Healers",
	Match: async ({ req, res, next }) => {
		var Healers = await require ("DB/Healers/List") ();

		res.render ("Healers", {
			Tab: "🌴 Pacalmo ✨ Healers",
			Title: "Pacalmo",
			Healers
		});
	}
},
{
	Pattern: "/:Name/:Motif",
	Match: async ({ req, res, next }) => {
		var Name = require ("lodash/get") (req, [ "params", "Name" ], null);
		if (Name === null) {
			res.render ("Healer-not-found", {
				Tab: "Healer not found",
				Title: "Pacalmo"
			});
			return;
		}

		var Motif = require ("lodash/get") (req, [ "params", "Motif" ], null);
		if (Motif === null) {
			res.render ("Healer-not-found", {
				Tab: "Healer not found",
				Title: "Pacalmo"
			});
			return;
		}

		var Healer = await require ("DB/Healers/Find") ({
			Name,
			Motif
		});
		if (Healer === null) {
			res.render ("Healer-not-found", {
				Tab: "Healer not found",
				Title: "Pacalmo"
			});
			return;
		}

		res.render ("Healer", {
			Tab: `✨ ${ Name }`,
			Title: "Pacalmo",
			Healer
		});
	}
}
]

module.exports = Routes;

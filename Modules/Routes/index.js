

var Routes = [
{
	Pattern: "/",
	Match: ({ req, res, next }) => {
		require ("Render/Vue") ({
			req,
			res
		});
	}
},
{
	Pattern: "/*/Sessions",
	Match: async ({ req, res, next }) => {
		const Sessions = await require ("DB/Sessions/List") ();

		const Headers = req.headers;
		if (Headers.settings === "yes") {
			res.statusCode = 200;
			res.write (JSON.stringify (Healers));
			res.end ();
			return;
		}

		require ("Render/Vue") ({
			req,
			res,
			Tab: "🌴 Pacalmo 🌼 Sessions",
			Settings: {
				Sessions
			}
		});
	}
},
{
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
},
{
	Pattern: "/*/Healers",
	Match: async ({ req, res, next }) => {
		const Headers = req.headers;

		var Healers = await require ("DB/Healers/List") ();
		if (Headers.settings === "yes") {
			res.statusCode = 200;
			res.write (JSON.stringify (Healers));
			res.end ();
			return;
		}
		
		require ("Render/Vue") ({
			req,
			res,
			Tab: "🌴 Pacalmo ✨ Healers",
			Settings: {
				Healers
			}
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

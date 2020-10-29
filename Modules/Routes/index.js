

var Routes = [{
	Pattern: "/",
	Match: ({ req, res, next }) => {
		res.render ("Home", {
			Tab: "🌴 Pacalmo",
			Title: "Pacalmo"
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
	Pattern: "/*/Sessions/:Session",
	Match: async ({ req, res, next }) => {
		var Session = require ("lodash/get") (req, [ "params", "Session" ], "?");

		var Sessions = await require ("DB/Sessions/List") ();

		console.log ({ Sessions });

		res.render ("Sessions", {
			Tab: "🌴 Pacalmo 🌼 Sessions",
			Title: "Pacalmo",
			Sessions
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
},{
	Pattern: "/:Name/:Motif",
	Match: async ({ req, res, next }) => {
		var Healers = await require ("DB/Healers/List") ();

		res.render ("Healer", {
			Tab: `?`,
			Title: "Pacalmo",
			Healers
		});
	}
}]

module.exports = Routes;

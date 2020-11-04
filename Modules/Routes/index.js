

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
	Pattern: "/~/Sessions",
	Match: async ({ req, res, next }) => {
		const Sessions = await require ("DB/Sessions/List") ();

		const Headers = req.headers;
		if (Headers.settings === "yes") {
			res.statusCode = 200;
			res.write (JSON.stringify (Sessions));
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
require ("./Tilde/Sessions/:Name/:Motif"),
{
	Pattern: "/~/Healers",
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
require ("./:Name/:Motif")
]

module.exports = Routes;


function NotFound ({ Name, OnlySettings, req, res }) {
	if (OnlySettings === "yes") {
		res.statusCode = 404;
		res.write (JSON.stringify ({}));
		res.end ();
		return;
	}

	require ("Render/Vue") ({
		req,
		res,
		Tab: `✨ ${ Name }`,
		Settings: {
			Healer: {
				Found: false
			}
		}
	});
}

module.exports = {
	Pattern: "/:Name/:Motif",
	Match: async ({ req, res, next }) => {
		var Name = require ("lodash/get") (req, [ "params", "Name" ], null);
		var Motif = require ("lodash/get") (req, [ "params", "Motif" ], null);
		var OnlySettings = require ("lodash/get") (req, [ "headers", "settings" ], false);

		if (Name === null || Motif === null) {
			NotFound ({ req, res, OnlySettings, Name });
			return;
		}

		var Healer = await require ("DB/Healers/Find") ({
			Name,
			Motif
		});
		if (Healer === null) {
			NotFound ({ req, res, OnlySettings, Name });
			return;
		}

		if (OnlySettings === "yes") {
			res.statusCode = 200;
			res.write (JSON.stringify (Healer));
			res.end ();
			return;
		}

		require ("Render/Vue") ({
			req,
			res,
			Tab: `✨ ${ Name }`,
			Settings: {
				Healer
			}
		});
	}
}




var express = require ("express");
var router = express.Router();

router.get ("/:Healer", async (req, res, next) => {
	var Handle = req.params.Healer;

	var Healers = (await require ("DB/Healers/List") ())
	.filter (Healer => {
		return Healer.Handle === Handle;
	});

	for (let A = 0; A < Healers.length; A++) {
		if (Healers [ A ].Handle === Handle) {
			const Healer = Healers [ A ];

			res.render ("Healer", {
				Tab: Healer.Name,
				Title: "Pacalmo",
				Healer
			});
			return;
		}
	}

	res.render ("Healer", {
		Tab: Healer.Name,
		Title: "Pacalmo",
		Healer
	});
});

module.exports = router;

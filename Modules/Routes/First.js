


var express = require ("express");
var router = express.Router();

router.get ("/", function(req, res, next) {
	res.render ("Home", {
		Tab: "🌴 Pacalmo",
		Title: "Pacalmo"
	});
});

router.get ("/*/Sessions", async function (req, res) {
	var Sessions = await require ("DB/Sessions/List") ();

	res.render ("Sessions", {
		Tab: "🌴 Pacalmo 🌼 Sessions",
		Title: "Pacalmo",
		Sessions
	});
});

router.get ("/*/Healers", async function (req, res) {
	var Healers = await require ("DB/Healers/List") ();

	res.render ("Healers", {
		Tab: "🌴 Pacalmo ✨ Healers",
		Title: "Pacalmo",
		Healers
	});
});

module.exports = router;


var Stack = require ("path").resolve (__dirname, "../..");

var Climate = {
	Port: 80,
	Locations: {
		Templates: require ("path").resolve (Stack, "Templates"),
		Public: require ("path").resolve (Stack, "Public")
	}
};

module.exports = function () {
	return new Promise (Resolve => {
		Resolve (Climate);
	});
}





/*
	require ("Stack/Back/Production/Open") ();
*/

var pm2 = require ('pm2');

var name = require ("Settings").Stack.Production.Name;

module.exports = function () {
	var { Locations } = require ("Settings");

	pm2.connect (function(err) {
	    if (err) {
	        console.error(err);
	        process.exit(2);
	    }

	    pm2.start ({
	        script: Locations.Stack,
			name,
	        exec_mode: 'cluster',
	        instances: 1,
	        max_memory_restart: '100M',

			// output: "/dev/stdout",
      		// error: "/dev/stderr"
	    }, function (err, apps) {
			if (err) {
				throw err;
			}

	        pm2.disconnect (); // Disconnects from PM2

			console.log ("Stack opened");
	    });
	});
}

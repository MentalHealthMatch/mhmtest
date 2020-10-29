

(async () => {
	var { Port, Locations } = await require ("Climate") ();

	require ("Station/Open") ({
		Port,
		Locations
	});
}) ();

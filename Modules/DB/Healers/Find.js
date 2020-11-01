



module.exports = async function ({
	Name,
	Motif
}) {
	return new Promise (async (Resolve) => {
		var List = await require ("./List") ();

		for (let A = 0; A < List.length; A++) {
			const Spot = List [ A ];

			if (Spot.Name === Name && Spot.Motif === Motif) {
				Resolve (Spot);
				return;
			}
		}

		Resolve (null);
	});
}

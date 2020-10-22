// This is a dummy database access file.
//"use strict"; // use strict is not needed with node modules and let keywords. 

//NOTE:  Please leave these functions async.

// I am going to assume that the database schema is fixed.
// otherwise I would put the last names in the same record as the first names

async function getUsers() {
  await threadSim(200);
  return [
    { name: "Jerry", id: 1 },
    { name: "Billy", id: 2 },
  ];
}

async function getUserLastNames() {
  await threadSim(10);
  return [
    { id: 1, last: "Smitth" }, // this last name looks suspect.  Maybe Smith?
    { id: 2, last: "Jones" },
  ];
}

async function getClasses() {
  await threadSim(200);
  return [
    { name: "Trig", id: 1 },
    { name: "Calc", id: 2 },
  ];
}

function threadSim(ms) {

  return Promise.resolve(setTimeout(() => {}, ms))

}

module.exports = { getUsers, getUserLastNames, getClasses };

const databaseAccess = require("../routes/databaseAccess");
const database = require("../routes/databaseAccess");
const HashMap = require('hashmap');
var createError = require('http-errors')

//This is a common function used by /listAllUsers and /getUser/:id routes
const getUsersData = async function() {
  const result = [];
  const map = new HashMap();
  let users = {}, lastNamesUserList = {};
  try {
    users = await database.getUsers();
  } catch (e) {
    console.log(e);
    res.status(503).send("Service unavailable");
  }
  try {
    lastNamesUserList = await database.getLastNames();
  } catch (e) {
    console.log(e);
    res.status(503).send("Service unavailable");
  }

  for (let i = 0; i < users.length; i++) {
    map.set(users[i].id, {name: users[i].name});
  }

  for (let i = 0; i < lastNamesUserList.length; i++) {
    const userId = lastNamesUserList[i].id;
    let userRecord = map.get(userId);
    if (!userRecord) {
      userRecord = {};
    }
    userRecord["last"] = lastNamesUserList[i].last;
    map.set(userId, userRecord);
  }

  for (const [k, v] of map.entries()) {
    result.push({id: k, name: v.name, last: v.last});
  }

  return(result);
}

module.exports.getUsersData = getUsersData;

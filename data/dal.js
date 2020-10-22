// Data abstraction layer

const database = require("./databaseAccess")

// toggle this to simulate the ability to connect
const CAN_CONNECT = true
const ERR_MESSAGE = "No Database Connection"

let connection = false

async function getUsers() {

    let rtnValue = []; // this shows we intend to return an array of user objects

    try {

        let users = await database.getUsers();
        let usersLastNames = await database.getUserLastNames();

        console.log(users)
        rtnValue = users.map(user => {

            // fill user Object with the first name
            let userObject = {
                name: user.name
            };

            // look for the last name.  Match on id
            let lastName = usersLastNames.find(lName => user.id === lName.id);

            // add the last name to the userObject if we have a match
            if (lastName != undefined) {
                userObject.last = lastName.last;
            }

            // array of user objects with last names for all matches
            return userObject;
        })
    }
    catch (error) {
        // re-throw the error
        throw error;
    }

    return rtnValue;

}

function getUsersError() {

    throw new Error(`Can't get users. ${ERR_MESSAGE}`)

}

async function getClasses(req, res) {

    // async functions return a promise
    return database.getClasses()
        .then(classes => {
            return classes
        })
        .catch(error => {
            throw error
        });
}

function getClassesError() {

    throw new Error(`Can't get Classes. ${ERR_MESSAGE}`)

}


function connect() {

    // simulate a database connection
    // we want to use one connection to take
    // advantage of the speed of connection pools.

    return new Promise((resolve, reject) => {

        if (!CAN_CONNECT) {
            reject({
                error: new Error("Database Connection Error"),
                errorFunctions: {
                    getUsers: getUsersError,
                    getClasses: getClassesError
                }
            });
        } else {
            connection = true
            resolve({
                getUsers: getUsers,
                getClasses: getClasses
            });
        }
    });

}

function close() {

    if (connection !== "undefined") {

        if (connection === true) {

            // close db connection here
        }

    }
}

module.exports = { connect, close };
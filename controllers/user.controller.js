const userData = require("./users.mock.json");
const simluateApiResponse = require("../helpers/api-response-simulator");

const getFirstNames = async () => {
  await simluateApiResponse(200);
  return userData.firstNames;
};

const getLastNames = async () => {
  await simluateApiResponse(10);
  return userData.lastNames;
};

module.exports = {
  list: async (req, res, next) => {
    try {
      const firstNames = await getFirstNames();
      const lastNames = await getLastNames();
      const userList = firstNames.map((firstNameObject) => ({
        ...firstNameObject,
        last: lastNames.find(
          (lastNameObject) => lastNameObject.id === firstNameObject.id
        ).last,
      }));
      res.json(userList);
    } catch (error) {
      next(error);
    }
  },
};

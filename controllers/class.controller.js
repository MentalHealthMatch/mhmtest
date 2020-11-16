const classData =  require('./classes.mock.json');
const simluateApiResponse = require('../helpers/api-response-simulator');

const getClasses = async () => {
  await simluateApiResponse(200);
  return classData.classes;
};

module.exports = {
  list: async (req, res, next) => {
    try {
      const classes = await getClasses();
      res.json(classes);
    } catch (error) {
      next(error);
    }
  },
};

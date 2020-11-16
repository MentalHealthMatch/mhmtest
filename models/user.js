const whatIsThisDoing = (ms) => {
  return new Promise((doSomething) => setTimeout(doSomething, ms));
};

const getUsers = async () => {
  await whatIsThisDoing(200);
  return [
    { name: "Jerry", id: 1 },
    { name: "Billy", id: 2 },
  ];
};

const getLastNames = async () => {
  await whatIsThisDoing(10);
  return [
    { id: 1, last: "Smitth" },
    { id: 2, last: "Jones" },
  ];
};

module.exports = { getUsers, getLastNames };

const whatIsThisDoing = (ms) => {
  return new Promise((doSomething) => setTimeout(doSomething, ms));
};

const getFirstNames = async () => {
  await whatIsThisDoing(200);
  return [
    { first: "Jerry", id: 1 },
    { first: "Billy", id: 2 },
  ];
};

const getLastNames = async () => {
  await whatIsThisDoing(10);
  return [
    { id: 1, last: "Smitth" },
    { id: 2, last: "Jones" },
  ];
};

module.exports = { getFirstNames, getLastNames };

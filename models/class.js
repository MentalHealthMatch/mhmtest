const whatIsThisDoing = (ms) => {
  return new Promise((doSomething) => setTimeout(doSomething, ms));
};

const getClasses = async () => {
  await whatIsThisDoing(200);
  return [
    { first: "Trig", id: 1 },
    { first: "Calc", id: 2 },
  ];
};

module.exports = { getClasses };

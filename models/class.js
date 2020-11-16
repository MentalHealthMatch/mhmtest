

const whatIsThisDoing = (ms) => {
  return new Promise((doSomething) => setTimeout(doSomething, ms));
}

const getAllClasses = async () => {
  await whatIsThisDoing(200);
  return [
    { name: "Trig", id: 1 },
    { name: "Calc", id: 2 },
  ];
}

module.exports = { getAllClasses };
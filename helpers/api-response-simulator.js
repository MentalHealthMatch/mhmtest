const apiResponseSimulator = (ms) => {
  return new Promise((doSomething) => setTimeout(doSomething, ms));
};

module.exports = apiResponseSimulator;

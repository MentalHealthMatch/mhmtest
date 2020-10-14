const classesService = {
  async getAllClasses() {
    await classesService.timeout(200);
    return [
      { name: "Trig", id: 1 },
      { name: "Calc", id: 2 },
    ];
  },
  timeout(ms) {
    return new Promise((doSomething) => setTimeout(doSomething, ms));
  }
}


module.exports = classesService;
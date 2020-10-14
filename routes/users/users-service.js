const usersService = {
  async getAllUsers() {
    await usersService.timeout(200);
    return [
      { name: "Jerry", id: 1 },
      { name: "Billy", id: 2 },
    ];
  },
  async getUsersById(id) {
    await usersService.timeout(200);
    return [
      { name: "Jerry", id: 1 },
      { name: "Billy", id: 2 },
    ].filter(user => user.id == id);
  },
  async getAllLastNames() {
    await usersService.timeout(10);
    return [
      { id: 1, last: "Smith" },
      { id: 2, last: "Jones" },
    ];
  },
  timeout(ms) {
    return new Promise((doSomething) => setTimeout(doSomething, ms));
  }
}

module.exports = usersService;
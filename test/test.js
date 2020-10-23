const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const fs = require('fs');

const app = require('../app');
const databaseAccess = require('../db/database-access');

//Since we'll be modifying the "database",
//this hook resets to seed values after execution
afterEach(function() {
  const seedData = fs.readFileSync(__dirname + '/seed-data.json');
  fs.writeFileSync(__dirname + '/../db/mock-data.json', seedData);
});


describe("API endpoints", function() {
  describe("GET /users", function() {
    it("fetches all users", function(done) {
      chai.request(app)
        .get("/users")
        .end((err, result) => {
          result.should.have.status(200);
          assert.equal(result.body.length, 2);
          done();
        });
    });
  });

  describe("GET /users/:id", function() {
    it("fetches the requested user", function(done) {
      chai.request(app)
        .get("/users/1")
        .end((err, result) => {
          result.should.have.status(200);
          assert.equal(result.body.name, "Jerry");
          done();
        });
    });
  });

  describe("POST /users/", function() {
    it("creates a new user", function(done) {
      chai.request(app)
        .post("/users")
        .send({
          "name": "Sabrina",
          "last": "Spellman"
        })
        .end((err, result) => {
          result.should.have.status(200);
          assert.equal(result.body.length, 3);
          done();
        });
    });
  });

  describe("PUT /users/:id", function() {
    it("updates an existing user", function(done) {
      chai.request(app)
      .put("/users/1")
      .send({
        "name": "Ben"
      })
      .end((err, result) => {
        result.should.have.status(200);
        assert.equal(result.body.name, "Ben");
        done();
      });
    });
  });

  describe("DELETE /users/:id", function() {
    it("destroys an existing user", function(done) {
      chai.request(app)
      .delete("/users/1")
      .end((err, result) => {
        result.should.have.status(200);
        assert.equal(result.body.length, 1);
        done();
      });
    });
  });

  describe("GET /classes", function() {
    it("fetches all classes", function(done) {
      chai.request(app)
        .get("/classes")
        .end((err, result) => {
          result.should.have.status(200);
          assert.equal(result.body.length, 2);
          done();
        });
    });
  });

  describe("GET /classes/:id", function() {
    it("fetches the requested class", function(done) {
      chai.request(app)
        .get("/classes/2")
        .end((err, result) => {
          result.should.have.status(200);
          assert.equal(result.body.name, "Calculus");
          done();
        });
    });
  });

  describe("POST /classes/", function() {
    it("creates a new class", function(done) {
      chai.request(app)
        .post("/classes")
        .send({
          "name": "AP Computer Science"
        })
        .end((err, result) => {
          result.should.have.status(200);
          assert.equal(result.body.length, 3);
          done();
        });
    });
  });

  describe("PUT /classes/:id", function() {
    it("updates an existing class", function(done) {
      chai.request(app)
      .put("/classes/2")
      .send({
        "name": "Differential Calculus"
      })
      .end((err, result) => {
        result.should.have.status(200);
        assert.equal(result.body.name, "Differential Calculus");
        done();
      });
    });
  });

  describe("DELETE /classes/:id", function() {
    it("destroys an existing class", function(done) {
      chai.request(app)
      .delete("/classes/1")
      .end((err, result) => {
        result.should.have.status(200);
        assert.equal(result.body.length, 1);
        done();
      });
    });
  });
});



describe("Mock database functions", function() {
  describe("getUsers()", function() {
    it("fetches all users", async function() {
      const users = await databaseAccess.getUsers();
      assert.equal(users.length, 2);
    });
  });

  describe("getUser()", function() {
    it("fetches the requested user", async function() {
      const user = await databaseAccess.getUser(1);
      assert.equal(user.name, "Jerry");
    });
  });

  describe("createUser()", function() {
    it("adds a new user to the fake database", async function() {
      const userParams = { name: "Test", last: "User" };
      const priorUsers = await databaseAccess.getUsers();
      await databaseAccess.createUser(userParams);
      const newUsers = await databaseAccess.getUsers();
      assert.equal(newUsers.length, priorUsers.length + 1);
    });
  });

  describe("updateUser()", function() {
    it("updates the given user with the given params", async function() {
      const userParams = { id: "1", name: "Ben" };
      const newUser = await databaseAccess.updateUser(userParams);
      const updatedUser = await databaseAccess.getUser(1);
      assert.equal(updatedUser.name, "Ben");
    });
  });

  describe("destroyUser()", function() {
    it("destroys the given user", async function() {
      const priorUsers = await databaseAccess.getUsers();
      await databaseAccess.destroyUser(2);
      const newUsers = await databaseAccess.getUsers();
      assert.equal(newUsers.length, priorUsers.length - 1);
    });
  });

  describe("getClasses()", function() {
    it("fetches all classes", async function() {
      const classes = await databaseAccess.getClasses();
      assert.equal(classes.length, 2);
    });
  });

  describe("getClass()", function() {
    it("fetches the requested class", async function() {
      const thisClass = await databaseAccess.getClass(2);
      assert.equal(thisClass.name, "Calculus");
    });
  });

  describe("createClass()", function() {
    it("adds a new class to the fake database", async function() {
      const classParams = { name: "AP US Government" };
      const priorClasses = await databaseAccess.getClasses();
      await databaseAccess.createClass(classParams);
      const newClasses = await databaseAccess.getClasses();
      assert.equal(newClasses.length, priorClasses.length + 1);
    });
  });

  describe("updateClass()", function() {
    it("updates the given class with the given params", async function() {
      const classParams = { id: "1", name: "Math Analysis" };
      const newclass = await databaseAccess.updateClass(classParams);
      const updatedClass = await databaseAccess.getClass(1);
      assert.equal(updatedClass.name, "Math Analysis");
    });
  });

  describe("destroyClass()", function() {
    it("destroys the given class", async function() {
      const priorClasses = await databaseAccess.getClasses();
      await databaseAccess.destroyClass(2);
      const newClasses = await databaseAccess.getClasses();
      assert.equal(newClasses.length, priorClasses.length - 1);
    });
  });
});
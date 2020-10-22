const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const app = require('../app');
const databaseAccess = require('../db/databaseAccess');

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
});

describe("Mock database functions", function() {
  describe("getUsers()", function() {
    it("should fetch all users", async function() {
      const users = await databaseAccess.getUsers();
      assert.equal(users.length, 2);
    });
  });

  describe("getUser()", function() {
    it("should fetch the requested user", async function() {
      const user = await databaseAccess.getUser(1);
      assert.equal(user.name, "Jerry");
    });
  });

  describe("getClasses()", function() {
    it("should fetch all classes", async function() {
      const classes = await databaseAccess.getClasses();
      assert.equal(classes.length, 2);
    });
  });

  describe("getClass()", function() {
    it("should fetch the requested class", async function() {
      const thisClass = await databaseAccess.getClass(2);
      assert.equal(thisClass.name, "Calculus");
    });
  });
});
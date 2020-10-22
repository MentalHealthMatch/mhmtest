const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();
chai.use(chaiHttp);

describe("GET /listAllUsers", function() {
  it("should fetch all users", function(done) {
    chai.request(app)
      .get("/listAllUsers")
      .end((err, result) => {
        result.should.have.status(200);
        assert.equal(result.body.length, 2);
        done();
      });
  });
});

describe("GET /listallclasses", function() {
  it("should fetch all classes", function(done) {
    chai.request(app)
      .get("/listallclasses")
      .end((err, result) => {
        result.should.have.status(200);
        assert.equal(result.body.length, 2);
        done();
      });
  });
});
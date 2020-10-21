// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe("GET /users", function () {
  it("should get all users", function(done) {
       chai.request(app)
           .get('/users')
           .end(function (err, res) {
               res.should.have.status(200);
               res.body.should.eql([
                 {"name":"Jerry","id":1,"last":"Smitth"},
                 {"name":"Billy","id":2,"last":"Jones"}
                ]);
               done();
            });
   });
});

describe("GET /classes", function () {
  it("should get all classes", function(done) {
       chai.request(app)
           .get('/classes')
           .end(function (err, res) {
               res.should.have.status(200);
               res.body.should.eql([
                { name: "Trig", id: 1 },
                { name: "Calc", id: 2 },
              ]);
               done();
            });
   });
});

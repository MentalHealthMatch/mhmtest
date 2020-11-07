const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../app.js');
const should = chai.should();

chai.use(chaiHttp);
describe('Application', () => {
    describe('Homepage', () => {
        it('it should be served', (done) => {
            chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.include('Welcome to Express');
                done();
            });
        });
    });
});

const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiThings = require('chai-things');

const server = require('../../app.js');
const should = chai.should();

chai.use(chaiHttp);
chai.use(chaiThings);
describe('Users API', () => {
    describe('GET /users', () => {
        it('it should fetch all users', (done) => {
            chai.request(server)
            .get('/api/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
                res.body.should.all.have.property('id');
                res.body.should.all.have.property('name');
                res.body.should.all.have.property('last');
                res.body.length.should.not.be.eql(0);
                done();
            });
        });
    });

    describe('GET /users/:id', () => {
        it('it should fetch the correct user', (done) => {
            chai.request(server)
            .get('/api/users/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.should.have.property('id', 1);
                res.body.should.have.property('name', 'Jerry');
                res.body.should.have.property('last', 'Smitth');
                done();
            });
        });

        it('it should return "Not Found" when user doesn\'t exists', (done) => {
            chai.request(server)
            .get('/api/users/5')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.an('object');
                res.body.should.have.property('message', 'Not Found');
                done();
            });
        });
    });
});

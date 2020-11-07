const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiThings = require('chai-things');

const server = require('../../app.js');
const should = chai.should();

chai.use(chaiHttp);
chai.use(chaiThings);
describe('Classes API', () => {
    describe('GET /classes', () => {
        it('it should fetch all classes', (done) => {
            chai.request(server)
            .get('/api/classes')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
                res.body.should.all.have.property('id');
                res.body.should.all.have.property('name');
                res.body.length.should.not.be.eql(0);
                done();
            });
        });
    });

    describe('GET /classes/:id', () => {
        it('it should fetch the correct class', (done) => {
            chai.request(server)
            .get('/api/classes/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.should.have.property('id', 1);
                res.body.should.have.property('name', 'Trig');
                done();
            });
        });

        it('it should return "Not Found" when class doesn\'t exists', (done) => {
            chai.request(server)
            .get('/api/classes/5')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.an('object');
                res.body.should.have.property('message', 'Not Found');
                done();
            });
        });
    });
});

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const knex = require('../../src/db/connection');

chai.use(chaiHttp);

const server = require('../../src/server/app');

describe('routes : index', () => {

  beforeEach((done) => { done(); });

  afterEach((done) => { done(); });

  describe('GET /', () => {
    it('should render the sum', (done) => {
      chai.request(server)
      .get('/coffee')
      .end((err, res) => {
        return knex('coffee').where('id', 1).first();
        res.redirects.length.should.equal(0);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.should.contain.keys('status', 'data');
        res.body.status.should.eql('success');
        res.body.data.should.eql('array');
        res.body.data[0].id.should.eql('coffee.id');
        done();
      });
    });
  });

  describe('GET /404', () => {
    it('should throw an error', (done) => {
      chai.request(server)
      .get('/404')
      .end((err, res) => {
        res.redirects.length.should.equal(0);
        res.status.should.equal(404);
        res.type.should.equal('application/json');
        res.body.message.should.eql('Not Found');
        done();
      });
    });
  });

});

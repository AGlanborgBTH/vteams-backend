const chai = require('chai');

const expect  = chai.expect;
require('chai').should();
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);

describe('Api Tests', () => {

  it('Test cities api...', (done) => {
    chai.request(server)
    .get('/v1/cities')
    .end((err, res) => {
      res.should.have.status(200, "Api didn't send status 200");
      res.body.should.be.a('object');
      res.body.data.length.should.be.gte(3);
      res.body.data.forEach(data => {
        data.parkings.length.should.be.gte(1);
        data.charging.length.should.be.gte(1);
        data.geojson.should.be.a('object');
        data.center.should.not.be.empty;
        data.limit.should.not.be.empty;
        data.geojson.should.not.be.empty;
        data.scooters.length.should.be.gte(333, 'Amount of scooters per cities should be above 333');
        });
      
      done();
    });
  })

  it('Test scooters api...', (done) => {
      chai.request(server)
      .get('/v1/scooters')
      .end((err, res) => {
        res.should.have.status(200, "Api didn't send status 200");
        res.body.should.be.a('object');
        res.body.data.length.should.be.gte(1000, 'There should be at least 1000 scooters');
        res.body.data.forEach(data => {
          data.name.should.not.be.empty;
          data.location.should.not.be.empty;
          data.city.should.not.be.empty;
          });
        done();
      });
  })

  it('Test Users api...', (done) => {
      chai.request(server)
      .get('/v1/users')
      .end((err, res) => {
        res.should.have.status(200, "Api didn't send status 200");
        expect(res.body.data).to.satisfy(data => data.some(d => d.adminstatus === true, 'At least one user have adminstatus'));
        done();
      });
  })
})

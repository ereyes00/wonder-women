const models = require('../models');

const Event = models.Event;
const Image = models.Image;

// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../back/server.js');

const should = chai.should();

const events = {
  title: 'Marilyn Minter: Pretty/Dirty',
  location: 'Brooklyn Museum',
  closing: '4/2/2017',
  hours: 'Wednesday - Sunday 11am - 6pm | Thursday closes at 10pm',
  price: 'Suggested $16',
  description: 'Marilyn Minter’s sensual paintings, photographs, and videos vividly explore complex and contradictory emotions around beauty and the feminine body in American culture. She trains a critical eye on the power of desire, questioning the fashion industry’s commercialization of sex and the body. Marilyn Minter: Pretty/Dirty is the first retrospective of her work.',
  zipCode: '11238',
  type: 'MUSEUM',
};

chai.use(chaiHttp);
// Our parent block
describe('Art-Gal', () => {
//     beforeEach((done) => { //Before each test we empty the database
//       models.sequelize.sync({force: true}).then(function() {
//         seedFunction()
//         done();
//       })
//     });
/*
  * Test the /GET route
  */
  describe('/GET events route', () => {
    it('server should have a /api/events GET route', (done) => {
      chai.request(server)
          .get('/api/events')
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
    });
  });

  describe('/GET events functionality', () => {
    it('route should GET all the events', (done) => {
      chai.request(server)
          .get('/api/events')
          .end((err, res) => {
            res.body.should.be.a('array');
            res.body.length.should.be.above(0);
            done();
          });
    });
  });

  describe('/GET one event route', () => {
    it('server should have a /api/events/:id GET route', (done) => {
      chai.request(server)
          .get('/api/events/1')
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
    });
  });

  describe('/GET one event functionality', () => {
    it('route should GET one event', (done) => {
      chai.request(server)
          .get('/api/events/1')
          .end((err, res) => {
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.should.have.property('location');
            res.body.should.have.property('closing');
            res.body.should.have.property('hours');
            res.body.should.have.property('price');
            res.body.should.have.property('description');
            res.body.should.have.property('type');
            done();
          });
    });
  });

  describe('/POST events route', () => {
    it('server should have a /api/events POST route', (done) => {
      chai.request(server)
          .post('/api/events')
          .send(events)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
    });
  });

  describe('/POST events functionality', () => {
    it('route should POST events', (done) => {
      chai.request(server)
          .post('/api/events')
          .send(events)
          .end((err, res) => {
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.should.have.property('location');
            res.body.should.have.property('closing');
            res.body.should.have.property('hours');
            res.body.should.have.property('price');
            res.body.should.have.property('description');
            res.body.should.have.property('type');
            done();
          });
    });
  });

  // describe('/POST review route', () => {
  //     it('server should have a /api/review/:id route', (done) => {
  //       let review = reviews[0]
  //       chai.request(server)
  //           .post('/api/review/2')
  //           .send(review)
  //           .end((err, res) => {
  //               res.should.have.status(200);
  //             done();
  //           });
  //     });
  // });

  // describe('/POST review functionality', () => {
  //     it('route should POST a review ', (done) => {
  //       let review = reviews[0]
  //       chai.request(server)
  //           .post('/api/review/2')
  //           .send(review)
  //           .end((err, res) => {
  //               res.body.should.be.a('object');
  //               res.body.should.have.property('rating');
  //               res.body.should.have.property('description');
  //               res.body.should.have.property('date');
  //             done();
  //           });
  //     });
  // });


  // describe('/GET restaurant route', () => {
  //     it('server should have a /api/restaurants/:id GET route', (done) => {
  //       chai.request(server)
  //           .get('/api/restaurants/1')
  //           .end((err, res) => {
  //               res.should.have.status(200);
  //             done();
  //           });
  //     });
  // });

  // describe('/GET restaurant functionality', () => {
  //     it('route should GET a single restaurant along with all its reviews', (done) => {
  //       chai.request(server)
  //           .get('/api/restaurants/1')
  //           .end((err, res) => {
  //               res.body[0].should.be.a('object');
  //               res.body[0].should.have.property('name');
  //               res.body[0].should.have.property('neighborhood');
  //               res.body[0].should.have.property('cuisine');
  //               res.body[0].should.have.property('address');
  //               res.body[0].should.have.property('cost');
  //               res.body[0].Reviews.should.be.a('array');
  //               res.body[0].Reviews.length.should.be.eql(2);
  //             done();
  //           });
  //     });
  // });
});

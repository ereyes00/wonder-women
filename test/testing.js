process.env.NODE_ENV = 'test';

let models = require('../models')
let Event = models.Event;
let Image = models.Image;

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../back/server.js');
let should = chai.should();

//let restaurants = require('../seed/restaurant.js')
let events = require('../seed.js').events
//let reviews = require('../seed/review.js')
let images = require('../seed.js').images
//let seedFunction = require('../seed')

chai.use(chaiHttp);
//Our parent block
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
                res.body.length.should.be.eql(4); //greater than 0
              done();
            });
      });
  });

  describe('/POST events route', () => {
      it('server should have a /api/events POST route', (done) => {
        let events = //event info
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
        let events = //event info
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

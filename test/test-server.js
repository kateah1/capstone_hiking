var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../server/server.js')
var should = chai.should()

chai.use(chaiHttp)

describe('capstone_hiking', function () {
  it('should add a new user on /register POST', function (done) {
    chai.request(server)
      .post('/register')
      .send({'firstName': 'test', 'lastName': 'test', 'username': 'test', 'email': 'test', 'password': 'test'})
      .end(function (err, res) {
        res.should.have.status(201)
        res.should.be.json
        res.body.should.be.a('array')
        done()
      })
  })
  it('should list hikes based on request on /home GET', function (done) {
    chai.request(server)
      .get('/home')
      .end(function (err, res) {
        res.should.have.status(200)
        res.should.be.html
        done()
      })
  })
  it('should list hikes based on request on /search GET', function (done) {
    chai.request(server)
      .get('/search')
      .end(function (err, res) {
        res.should.have.status(200)
        res.should.be.html
        done()
      })
  })
  it('should list details of hike based on requested id on /hikedetail/:id GET', function (done) {
    chai.request(server)
      .get('/hikedetail/30')
      .end(function (err, res) {
        res.should.have.status(200)
        res.should.be.html
        done()
      })
  })
  it('should list myHikes array based on username on /username/myhikes GET', function (done) {
    chai.request(server)
      .get('/user123/myhikes')
      .end(function (err, res) {
        res.should.have.status(200)
        res.should.be.html
        done()
      })
  })
  it('should add a hike to myHikes array based on hike id on /username/myhikes POST', function (done) {
    chai.request(server)
      .post('/user123/myhikes')
      .send({'id': 30, 'image': 'test', 'name': 'test', 'location': 'test'})
      .end(function (err, res) {
        res.should.have.status(201)
        res.should.be.json
        res.body.should.be.a('array')
        done()
      })
  })
  it('should delete a hike from myHikes array based on hike id on /username/myhikes/:id DELETE', function (done) {
    chai.request(server)
      .delete('/user123/myhikes/30')
      .end(function (err, res) {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
  })
  it('should list reviews for a hike based on hike id on /:id/reviews GET', function (done) {
    chai.request(server)
      .get('/30/reviews')
      .end(function (err, res) {
        res.should.have.status(200)
        res.should.be.html
        done()
      })
  })
  it('should add a review to reviews array based on hike id on /:id/review_form POST', function (done) {
    chai.request(server)
      .post('/30/review_form')
      .send({'dateHiked': 'test', 'hikingTime': 'test', 'trailhead': 'test', 'trailConditions': 'test', 'weather': 'test', 'gearUsed': 'test'})
      .end(function (err, res) {
        res.should.have.status(201)
        res.should.be.json
        res.body.should.be.a('array')
        done()
      })
  })
})
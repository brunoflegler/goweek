import supertest from 'supertest'
import app from '../../src/server'
const request = supertest.agent(app)

describe('POST /api/tweets', function () {
  const tweet = {
    /*     _id: '5be30f78ab71070af2bf3fd0', */
    author: 'bruno.dalcol',
    content: 'Fala devs, teste api com jest'
  }
  it('respond with json containing a create new tweet', function (done) {
    request
      .post('/api/tweets')
      .send(tweet)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})

describe('PUT /api/tweets/likes/5be310bd77cc1001244129ca', function () {
  it('respond status 200 OK ', function (done) {
    request
      .put('/api/tweets/likes/5be310bd77cc1001244129ca')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
})

describe('GET /tweets', function () {
  it('respond with json containing a list of all tweets', function (done) {
    request
      .get('/api/tweets')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})

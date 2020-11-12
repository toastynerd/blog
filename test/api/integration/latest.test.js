const { url }= require('./params');
const request = require('supertest')(url);

test('it should return an array of latest post titles', (done) => {
  request.post('/')
    .send({ query: '{ latest }'})
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull();
      expect(typeof(res.body.data)).toBe('object');
      done();
    });
});

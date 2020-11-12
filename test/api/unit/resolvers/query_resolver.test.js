const Query = require('../../../../src/resolvers/Query');

test('should get an array of posts from the latest resolver', () => {
  expect(Query.latest()).not.toBeNull();
  expect(Array.isArray(Query.latest())).toBeTruthy();
});

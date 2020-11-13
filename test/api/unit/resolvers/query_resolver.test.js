const Query = require('../../../../src/resolvers/Query');
const context = {
  prisma: {
    post: {
      findMany: () => []
    }
  }
};

test('should get an array of posts from the latest resolver', () => {
  expect(Query.latest(null, null, context, null)).not.toBeNull();
  expect(Array.isArray(Query.latest(null, null, context))).toBeTruthy();
});

const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../../../../src/resolvers/utils');
const contextWithToken = {
  request: {
    get: (input) => {
      expect(input).toBe('Authorization');
      return jwt.sign({userId: 'test user'}, APP_SECRET);
    }
  }
};

const contextNoToken = {
  request: {
    get: (input) => {
      expect(input).toBe('Authorization');
      return null;
    }
  }
}

test('getUserId function', () => {
  let userId = getUserId(contextWithToken);
  expect(userId).toBe('test user');
});

test('getUserId function no token', () => {
  expect(() => getUserId(contextNoToken)).toThrowError('Not Authenticated');
});

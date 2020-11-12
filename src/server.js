const { GraphQLServer } = require('graphql-yoga');

const resolvers = require('./resolvers');

const server = module.exports = new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers,
});

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeResolvers } = require('@graphql-tools/merge');
// const rootTypeDefs = require('./types');
// const rootResolvers = require('./resolvers');
// const sampleSchema = require('./sample');

const schema = makeExecutableSchema({
  typeDefs: [
    // rootTypeDefs,
    // sampleSchema.typeDefs
  ],
  resolvers: mergeResolvers([
    // rootResolvers,
    // sampleSchema.resolvers,
  ]),
});

module.exports = schema;

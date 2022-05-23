const { GraphQLUpload } = require('graphql-upload');

/**
 * https://www.tutorialspoint.com/graphql/graphql_resolver.htm
 * const sampleRepo = require('@app/database/repo/sample.repo');
 * Query {
 *  resolverFieldName:(root, args, context, info) =>
 *    sampleRepo(context, info.fieldName).repoFieldName(args);
 * },
 * __SchemaName__: {
 *  resolverFieldName1: (root, args,context) => {
 *    const { __loader__ } = context.loader;
 *    return loader.load(root.id);
 *  },
 *  resolverFieldName2: (user, args, context, info) =>
 *    sampleRepo(context, info.fieldName).repoFieldNameByUser(user.id),
 * },
 * Mutation: {
 *  resolverFieldName:(root, args, context, info) =>
 *    sampleRepo(context, info.fieldName).repoFieldNameMutation(args);
 * },
 * }
 */

const resolvers = {
  Upload: GraphQLUpload,
  // sample
};

module.exports = resolvers;

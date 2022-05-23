const gql = require('graphql-tag');

/**
 * https://graphql.org/learn/schema/
 * 1. type Query
 * 2. type Mutation
 * 3. type __nameOfObject__,
 * 4. input __inputNameOfObject__
 *
 * type Query {
 *  $value can be nameOfObject from [3]
 *  resolverFieldName($fieldName: $value): String or [__nameOfObject__] or __nameOfObject__
 *  resolverFieldName: String or [__nameOfObject__] or __nameOfObject
 * }
 *
 * type Mutation {
 *  resolverFieldName($field: $value): String or [__nameOfObject__] or __nameOfObject__
 *  resolverFieldName: String or [__nameOfObject__] or __nameOfObject
 * }
 *
 * type __nameOfObject__ {
 *  _id: ID
 *  string: String
 *  boolean: Boolean
 *  int: Int
 *  date: Date
 *  dateTime: DateTime
 *  float: Float
 *  nameOfObject: __nameOfObject__
 *  nameOfObjects: [__nameOfObject__]
 * }
 *
 * input __inputNameOfObject__ {
 *  _id: ID!
 *  string: String!
 *  boolean: Boolean
 *  int: Int
 *  date: Date
 *  dateTime: DateTime
 *  float: Float
 *  nameOfObject: __nameOfObject__
 *  nameOfObjects: [__nameOfObject__]
 * }
 */
const typeDefs = gql``;

module.exports = typeDefs;

const { graphqlHTTP } = require('express-graphql');
const { graphqlUploadExpress } = require('graphql-upload');
// const { sampleLoader } = require('@app/loaders');
const schema = require('../schema');

module.exports = function (app) {
  app.get('/', (req, res) => res.send('GraphQL Server is running'));

  app.use(
    '/graphql',
    graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
    graphqlHTTP((req) => ({
      schema,
      graphiql: {
        // defaultQuery: require('./default-query'),
        headerEditorEnabled: true,
      },
      context: {
        isAuth: req.isAuth,
        user: req.user,
        error: req.error,
        loaders: {}, // sampleLoader: sampleDataLoader
      },
      customFormatErrorFn: (err) => {
        if (!err.originalError) {
          return err;
        }
        /* 
          You can add the following to any resolver
          const error = new Error('My message')
          error.data = [...]
          error.code = 001
      */
        const message = err.message || 'An error occured.';
        const { code, data } = err.originalError;
        return {
          message,
          code,
          data,
        };
      },
    }))
  );
};

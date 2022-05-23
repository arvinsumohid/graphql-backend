const app = require('./app');

(async () => {
  try {
    const server = await app();

    const port = process.env.PORT || 8000;

    server.listen(port, () => {
      console.log(`${process.env.APP_NAME} backend listening on port ${port}`);
    });
  } catch (err) {
    process.exit(1);
  }
})();

const mongoose = require('mongoose');

let db;
const connect = async () => {
  const options = {
    maxPoolSize: 16,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const databaseURL = process.env.DATABASE_URL;
  const databaseName =
    process.env.TEST_DATABASE_NAME || process.env.DATABASE_NAME;

  try {
    db = await mongoose.connect(`${databaseURL}${databaseName}`, options);
    console.log(`Connected to database: ${databaseName}`);
  } catch (error) {
    console.log(error);
  }
};

const disconnect = async () => {
  db.disconnect();
};

module.exports = {
  connect,
  disconnect,
};

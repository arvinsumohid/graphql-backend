const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const logger = require('./utils/logger');
const { connect } = require('./database');

const app = express();
const morganFormat =
  ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms ":referrer" ":user-agent"';

const StartBackend = async () => {
  try {
    await connect();
    const jsonParser = bodyParser.json();
    const urlencodedParser = bodyParser.urlencoded({ extended: true });
    app.use(jsonParser);
    app.use(urlencodedParser);
    app.use(cookieParser());
    app.use(
      require('express-session')({
        secret: process.env.APP_SECRET,
        resave: false,
        saveUninitialized: false,
      })
    );
    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.use(require('./middleware/auth.middleware'));
    app.use(morgan(morganFormat));
    app.use(logger);

    const corsOptions = {
      origin: '*',
      methods: 'GET, OPTIONS, POST',
    };

    app.use(cors(corsOptions));
    require('./routes')(app);
    const server = http.createServer(app);

    return server;
  } catch (err) {
    console.error('Failed to initialize database connection!');
    console.log(err);
    return err;
  }
};

module.exports = StartBackend;

const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

const env = process.env.NODE_ENV || 'local';
if (env !== 'production') {
  const logger = require('morgan'); // eslint-disable-line global-require
  app.use(logger('dev'));
}

// Enable Cross-origin resource sharing
app.use(cors());

// Enable gzip compression
app.use(compression());

// Enable helmet middleware
app.use(helmet());

// Disable x-powered-by header
app.disable('x-powered-by');

app.use('/test', (req, res) => {
    res.send("test")
})

app.use('*', (req, res) => res.send("error"));

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => console.log(`server listening on ${PORT}`));
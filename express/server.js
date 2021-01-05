'use strict';

const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const { Card } = require('express-github-stats-card');
require('dotenv').config();
const router = express.Router();

router.get('/', async (_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const statsCard = await Card('cnocon', process.env.GITHUB_ACCESS_TOKEN, true);
  res.write(statsCard);
  res.end();
});

app.use(bodyParser.json());

// path must route to lambda
app.use('/.netlify/functions/server', router);

app.use('/', (_, res) => (
  res.sendFile(path.join(__dirname, '../index.html')))
);

module.exports = app;
module.exports.handler = serverless(app);

'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const Card = require('express-github-stats-card').Card;
require('dotenv').config();

const router = express.Router();
router.get('/', async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const statsCard = await Card('cnocon', process.env.GITHUB_ACCESS_TOKEN, true);
  res.write(statsCard);
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);

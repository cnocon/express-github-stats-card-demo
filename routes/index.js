const express = require('express');
const router = express.Router();
const Card = require('express-github-stats-card').Card;
require('dotenv').config();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const statsCard = await Card('cnocon', process.env.GITHUB_ACCESS_TOKEN, true);
  res.send(statsCard);
});

module.exports = router;

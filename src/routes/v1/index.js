const express = require('express');
const router = express.Router();
const TweetController = require('../../controllers/tweet-controller');

router.use('/createTweet',TweetController.createTweet);

module.exports = router;
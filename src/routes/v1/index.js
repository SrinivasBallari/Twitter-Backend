const express = require('express');
const router = express.Router();
const TweetController = require('../../controllers/tweet-controller');
const LikeController = require('../../controllers/like-controller')

router.use('/createTweet',TweetController.createTweet);

router.use('/likes/toggleLike',LikeController.toggleLike);

module.exports = router;
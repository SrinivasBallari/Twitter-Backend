const express = require('express');
const router = express.Router();
const TweetController = require('../../controllers/tweet-controller');
const LikeController = require('../../controllers/like-controller')
const CommentController = require('../../controllers/comment-controller')

router.post('/createTweet',TweetController.createTweet);

router.post('/likes/toggleLike',LikeController.toggleLike);

router.post('/comments/create',CommentController.createComment);

router.get('/tweets/:id', TweetController.getTweet);

module.exports = router;
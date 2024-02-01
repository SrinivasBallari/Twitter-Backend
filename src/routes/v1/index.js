const express = require('express');
const router = express.Router();
const TweetController = require('../../controllers/tweet-controller');
const LikeController = require('../../controllers/like-controller')
const CommentController = require('../../controllers/comment-controller');
const { signup } = require('../../controllers/auth-controller');

router.post('/createTweet',TweetController.createTweet);

router.post('/likes/toggleLike',LikeController.toggleLike);

router.post('/comments/create',CommentController.createComment);

router.get('/tweets/:id', TweetController.getTweet);

router.post('/signup',signup);

module.exports = router;
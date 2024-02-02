const express = require('express');
const router = express.Router();
const TweetController = require('../../controllers/tweet-controller');
const LikeController = require('../../controllers/like-controller')
const CommentController = require('../../controllers/comment-controller');
const { signup , login } = require('../../controllers/auth-controller');
const authenticate = require('../../middleware/authenticate')

router.post('/createTweet',authenticate , TweetController.createTweet);

router.post('/likes/toggleLike',LikeController.toggleLike);

router.post('/comments/create',authenticate, CommentController.createComment);

router.get('/tweets/:id', TweetController.getTweet);

router.post('/signup',signup);

router.post('/login',login);

module.exports = router;
const Tweet = require('../models/tweet');

class TweetRepo {

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }


    async update(tweetId, data) {
        try {
            const tweet = await Tweet.update(tweetId, data , {new : true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }


    async getTweet(tweetId) {
        try {
            const tweet = await Tweet.findById(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }


    async getTweetWithComments(tweetId) {
        try {
            const tweet = await Tweet.findById(tweetId).populate({path: "comments"});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }


    async destroy(tweetId) {
        try {
            const tweet = await Tweet.findByIdAndDelete(tweetId);
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = TweetRepo;
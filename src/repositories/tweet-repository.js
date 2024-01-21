const Tweet = require('../models/tweet');

class TweetRepo {

    constructor(){
        super(Tweet);
    }

    async getTweetWithComments(tweetId) {
        try {
            const tweet = await Tweet.findById(tweetId).populate({path: "comments"});
            return tweet;
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
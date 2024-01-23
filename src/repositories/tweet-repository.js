const Tweet = require('../models/tweet');
const CrudRepo = require('./crud-repository');

class TweetRepo extends CrudRepo {

    constructor() {
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

    async find(id){
        try {
            const tweet = await Tweet.findById(id).populate({path : 'likes'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = TweetRepo;
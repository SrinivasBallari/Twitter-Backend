const { TweetService } = require('../services/index');
const tweetService = new TweetService();

const createTweet = async(req,res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            message: "successfully created tweet",
            success: true,
            error : {},
            data: response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "some internal server error!",
            success: false,
            error: error,
            data: {}
        });
    }
}

export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched a tweet',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}

module.exports = {
    createTweet,
    getTweet
};
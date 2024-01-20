const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
   
    content : {
        type: String,
        required: true
    },

    hashtags : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Hashtag"
        }
    ]
},{timestamps: true});

const Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet;
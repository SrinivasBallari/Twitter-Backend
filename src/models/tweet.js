const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    
    userEmail: {
        type: String
    },

    content: {
        type: String,
        required: true
    },

    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Comment"
        }
    ]
},{timestamps: true});

const Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet;
const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
   
    content : {
        type: String,
        required: [true, "cannot create tweet with empty content"],
        max: [300, "tweet cannot exceed 300 characters"]
    },

    likes : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Like'
        }
    ],

    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    
},{timestamps: true});

const Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet;
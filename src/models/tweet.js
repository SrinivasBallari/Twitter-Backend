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

tweetSchema.virtual('tweetContentAndEmail').get(function process() {
    return `${this.content} is created by user with mail : ${this.userEmail}`;
});

tweetSchema.pre('save' , function(next){
    console.log('Inside hooks ... ');
    next();
})

const Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet;
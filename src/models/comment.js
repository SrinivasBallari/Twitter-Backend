const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({


    userEmail: {
        type: String,
    },
    content: {
        type: String,
        required: true
    }

},{timestamps: true});

const Comment = mongoose.model('Comment',commentSchema)

module.exports = Comment;
const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    
    content : {
        type: String,
        required: true
    },
    userId : {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    onModel : {
        required: true,
        type: String,
        enum: ['Tweet','Comment']
    },
    commentable : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    comments : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]

},{timestamps: true});

const Comment = mongoose.model('Comment',commentSchema)

module.exports = Comment;
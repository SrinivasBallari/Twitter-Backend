const {CommentService} = require('../services/index');

const commentService = new CommentService();

const createComment = async(req,res) => {
    try {
        const response = await commentService.create(
            req.query.modelId,
            req.query.modelType,
            req.body.userId,
            req.body.content
        );
        return res.status(200).json({
            result : response,
            message: 'successfully created comment',
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            result : {},
            message: 'failed',
            error: error
        });
    }
}

module.exports = {
    createComment
}
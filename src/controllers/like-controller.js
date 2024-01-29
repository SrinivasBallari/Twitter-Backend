const {LikeService} = require('../services/index');

const likeService = new LikeService();

const toggleLike = async(req,res) => {
    try {
        const response = await likeService.toggleLike(
            req.query.modelId,
            req.query.modelType,
            req.body.userId
        );
        return res.status(200).json({
            result : response,
            message: 'success',
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            result : {},
            message: 'failed',
            error: error
        });
    }
}

module.exports = {
    toggleLike
}
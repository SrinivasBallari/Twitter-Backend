const {LikeRepo, TweetRepo} = require('../repositories/index');

class LikeService {

    constructor() {
        this.tweetRepo = new TweetRepo();
        this.likeRepo = new LikeRepo();
    }

    async toggleLike(modelId, modelType, userId){
        
        if(modelType == 'Tweet') {
            var likeable = await this.tweetRepo.find(modelId);
        } else if(modelType == 'Comment') {
            // TODO
        } else {
            throw new Error('unknown modelType !!');
        }

        const likeExists = await this.likeRepo.findByUserAndLikeable({
            likeable : modelId,
            onModel : modelType,
            user : userId
        });

        if(likeExists) {
            likeable.likes.pull(likeExists.id);
            await likeable.save();
            await likeExists.remove();

            var isAdded = false;
        }else {
            const newLike = await this.likeRepo.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });

            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }
        return isAdded;
    }
}

module.exports = LikeService;
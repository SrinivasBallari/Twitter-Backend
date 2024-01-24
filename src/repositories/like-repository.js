const { Like } = require('../models/index');
const CrudRepo = require('./crud-repository');

class LikeRepo extends CrudRepo{

    constructor(){
        super(Like);
    }

    async findByUserAndLikable(data){
        try {
            const like  = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = LikeRepo;
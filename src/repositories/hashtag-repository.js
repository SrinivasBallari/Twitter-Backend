const Hashtag = require('../models/hashtag');
const {CrudRepo} = require('./index');

class HashtagRepo extends CrudRepo{
    
    constructor() {
        super(Hashtag);
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async findAll(tags){
        try {
            const response = await Hashtag.find({
                title: tags
            });
            return response; 
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepo;
const { Like } = require('../models/index');
const { CrudRepo } = require('./index');

class LikeRepo extends CrudRepo{

    constructor(){
        super(Like);
    }
}

module.exports = LikeRepo;
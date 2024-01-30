const CrudRepo = require('./crud-repository');
const { Comment } = require('../models/index');

class CommentRepo extends CrudRepo {
    constructor(){
        super(Comment);
    }
} 

module.exports = CommentRepo;
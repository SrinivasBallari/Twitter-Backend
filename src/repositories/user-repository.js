const { User } = require('../models/index');
const CrudRepo = require('./crud-repository');

class UserRepo extends CrudRepo{

    constructor(){
        super(User);
    }
}

module.exports = UserRepo;
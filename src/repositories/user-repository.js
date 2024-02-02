const { User } = require('../models/index');
const CrudRepo = require('./crud-repository');

class UserRepo extends CrudRepo{

    constructor(){
        super(User);
    }

    async findBy(data){
        try {
            const response = await User.findOne(data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserRepo;
const { UserRepo } = require('../repositories/index');

class UserService {
    constructor(){
        this.userRepo = new UserRepo();
    }

    async signup(data){
        try {
            const user = await this.userRepo.create(data);
            return user; 
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserService;
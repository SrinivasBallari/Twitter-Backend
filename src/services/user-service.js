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

    async getUserByEmail(email){
        try {
            const user = await this.userRepo.findBy({email});
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async signin(data) {
        try {
          const user = await this.getUserByEmail(data.email);
          if (!user) {
            throw {
              message: "No user found !",
            };
          }
    
          if (!user.comparePassword(data.password)) {
            throw {
              message: "Incorrect Passowrd",
            };
          }
    
          const token = user.genJwt();
          return token;
        } catch (error) {
          console.log("somethin went wrong at service layer");
          throw error;
        }
    }
}

module.exports = UserService;
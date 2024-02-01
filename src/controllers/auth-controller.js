const { UserService } = require('../services/index');

const userService = new UserService();

const signup = async (req, res) => {
    try {
        const response = await userService.signup({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name
        });
        return res.status(201).json({
            success: true,
            data: response,
            message: "Successfully created new user",
            err : {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            message: "Some error creating the user",
            err : error
        });
    }
}

module.exports = {
    signup
}
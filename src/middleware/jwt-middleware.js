const JWT = require('passport-jwt');
const User = require('../models/user');
const dotenv = require('dotenv');
dotenv.config();

const JWTStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TWITTER_SECRECT_KEY
}

const passportAuth = (passport) => {
    passport.use(new JWTStrategy(
        options,
        async (jwt_payload, done) => {
            const user = await User.findById(jwt_payload.id);
            if(!user){
                done(null,false);
            }else{
                done(null,user);
            }
        }
    ))
}

module.exports = {
    passportAuth
}
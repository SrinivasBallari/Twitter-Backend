const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const JWT = require("jsonwebtoken");
const { TWITTER_SECRECT_KEY } = require("../config/server-config");

const userSchema = mongoose.Schema({

    email : {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    }

},{timestamps: true});

userSchema.pre('save', function(next){
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password,this.password);
}

userSchema.methods.genJwt = function generate() {
    return JWT.sign({id: this._id, email : this.email}, TWITTER_SECRECT_KEY, {expiresIn : "1d"});
}

const User = mongoose.model('User',userSchema);

module.exports = User;
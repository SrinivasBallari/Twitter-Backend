const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    TWITTER_SECRECT_KEY: process.env.TWITTER_SECRECT_KEY
}
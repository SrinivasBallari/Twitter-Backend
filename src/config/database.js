const mongoose = require('mongoose');

const connect = async() => {
    await mongoose.connect('mongodb://127.0.0.1/twitter_dev_db');
}

module.exports = connect;
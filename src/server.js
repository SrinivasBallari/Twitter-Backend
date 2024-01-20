const express = require('express')
const connect = require('./config/database');
const { PORT } = require('./config/server-config');
const TweetRepo = require('./repositories/tweet-repo');

const setupAndStartServer = () => {

    const app = express();

    app.listen(PORT, async () => {
        console.log(`server started on port : ${PORT}`);
        await connect();
        console.log(`connected to mongodb`);
    });
}

setupAndStartServer();
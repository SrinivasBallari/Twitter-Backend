const express = require('express')
const app = express();

const connect = require('./config/database');
const { PORT } = require('./config/server-config')

const setupAndStartServer = () => {
    app.listen(PORT, async () => {
        console.log(`server started on port : ${PORT}`);
        await connect();
        console.log(`connected to mongodb`);
    });
}

setupAndStartServer();
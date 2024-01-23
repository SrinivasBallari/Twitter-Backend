const express = require('express')
const connect = require('./config/database');
const { PORT } = require('./config/server-config');
const apiRoutes = require('./routes/index')

const setupAndStartServer = () => {

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api',apiRoutes);
    
    app.listen(PORT, async () => {
        console.log(`server started on port : ${PORT}`);
        await connect();
        console.log(`connected to mongodb`);

        

    });


}

setupAndStartServer();
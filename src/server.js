const express = require('express')
const connect = require('./config/database');
const { PORT } = require('./config/server-config');
const apiRoutes = require('./routes/index');
const {passportAuth} = require("./middleware/jwt-middleware")
const passport = require("passport");


const setupAndStartServer = () => {
    
    passportAuth(passport);
    const app = express();
    app.use(passport.initialize());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api',apiRoutes);
    
    app.listen(PORT, async () => {
        console.log(`server started on port : ${PORT}`);
        await connect();
        console.log(`connected to database`);

    });


}

setupAndStartServer();
const express = require('express')
const connect = require('./config/database');
const { PORT } = require('./config/server-config');
const apiRoutes = require('./routes/index');
const { TweetRepo, UserRepo } = require('./repositories/index');
const { LikeService } = require('./services/index');

const setupAndStartServer = () => {

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api',apiRoutes);
    
    app.listen(PORT, async () => {
        console.log(`server started on port : ${PORT}`);
        await connect();
        console.log(`connected to mongodb`);

        const tweetRepo = new TweetRepo();
        const tweets = await tweetRepo.getAll(0,10);

        const userRepo = new UserRepo();
        const user = await userRepo.get('65b11c460196b7477dc6ae12');

        const likeService = new LikeService();
        await likeService.toggleLike(tweets[0].id,'Tweet',user.id);

    });


}

setupAndStartServer();
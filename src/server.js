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

        // const tweetRepo = new TweetRepo();
    
        // const tweets = await tweetRepo.getAll(0,4);
        // console.log(tweets);
        
        // console.log(tweets[3].tweetContentAndEmail);

        // const tweet = await tweetRepo.create({content: "last tweet of the day"});
        // console.log(tweet);
    });
}

setupAndStartServer();
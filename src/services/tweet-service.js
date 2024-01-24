const {TweetRepo,HashtagRepo} = require('../repositories/index');

class TweetService {
    
    constructor(){
        this.tweetRepo = new TweetRepo();
        this.hashtagRepo = new HashtagRepo();
    }

    #extractTags(data){
        const tweet = data.content;
        let tags = tweet.match(/#[a-zA-Z0-9_]+/g);
        if(tags){
            tags = tags.map(tag => tag.substring(1).toLowerCase());
        }
        return tags;
    }

    #identifyAndFilterNewTags(tagsInCurrentTweet, existingTags){

        if(tagsInCurrentTweet){
            const tagTitlesInExistingTags = existingTags.map(tag => tag.title);
            var newTags = tagsInCurrentTweet.filter(tag => !existingTags.includes(tag));
        }
        return newTags;
    }

    async create(data){
        try {
            const tweet = await this.tweetRepo.create(data);
            const tweetId = tweet.id;
            const tagsInCurrentTweet = this.#extractTags(data);
            let existingTags = await this.hashtagRepo.findAll(tagsInCurrentTweet);
            let newTags = this.#identifyAndFilterNewTags(tagsInCurrentTweet, existingTags);
            if(newTags){
                newTags = newTags.map((tag) => {
                    return {
                        title: tag,
                        tweets: [tweetId]
                    }
                });
            }
        
            existingTags.forEach( async (tag) => {
                tag.tweets.push(tweetId);
                await tag.save();
            });
            
            await this.hashtagRepo.bulkCreate(newTags);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetService;
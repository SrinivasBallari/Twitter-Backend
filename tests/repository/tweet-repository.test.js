const {Tweet} = require('../../src/models/index');
const {TweetRepo} = require('../../src/repositories/index');

test('test to create new tweet and return it', async () => {
    const data = {
        content : 'Test tweet content'
    }

    const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
        return {
            ...data,
            createdAt: '2025-02-09',
            updatedAt: '2025-02-09',
        }
    });

    const tweetRepo = new TweetRepo();
    const tweet = await tweetRepo.create(data);

    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe('Test tweet content');
});
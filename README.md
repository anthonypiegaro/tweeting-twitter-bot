# tweeting-twitter-bot

This is a twitter bot that will tweet every minute. This bot uses the twitter api, cron, twitter-api-v2, and openai. The tweets are generated using OpenAI API and are tweeted by using the twitter API. To run this yourself, you will need to get an API key from OpenAI, and will also need to sign up for a developer account with Twitter in order to get an app key, app secret key, access token, and an access secret. Once you have these keys, you can start using the bot!

Enter your OpenAi API key in tweetGenerator.js
```JavaScript
const configuration = new Configuration({
    // Use your api key from openai
    apiKey: "",
});
```

Enter your Twitter app key, app secret key, access token, and an access secret in twitterClient.js
```JavaScript
const userClient = new TwitterApi({
    // Add your own keys, given from twitter dev account
    appKey: "",
    appSecret: "",
    accessToken: "",
    accessSecret: "",
});
```

Enjoy

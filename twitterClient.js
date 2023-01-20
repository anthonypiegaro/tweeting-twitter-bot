const { TwitterApi } = require("twitter-api-v2");

const userClient = new TwitterApi({
    // Add your own keys, given from twitter dev account
    appKey: "",
    appSecret: "",
    accessToken: "",
    accessSecret: "",
});

const rwClient = userClient.readWrite;

module.exports = rwClient;


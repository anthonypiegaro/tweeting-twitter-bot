const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;
const tweetGenerator = require("./tweetGenerator");

const tweet = async() => {
    try {
        const tweetText = await tweetGenerator();
        await rwClient.v2.tweet(tweetText);
    } catch (error) {
        console.error(error);
    }
}

const job = new CronJob("* * * * *", () => {
    console.log("Cron job starting!");
    tweet();
});

job.start();
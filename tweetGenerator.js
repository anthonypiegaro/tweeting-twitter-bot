const { Configuration, OpenAIApi } = require("openai");

const promptTopics = [
    "Coronavirus",
    "Entertainment",
    "Politics",
    "United States",
    "Technology",
    "Sports",
    "Gaming",
    "Music",
    "Education",
    "Health"
]

const randomTopic = () => {
    return promptTopics[Math.floor(Math.random() * promptTopics.length)];
}

const configuration = new Configuration({
    // Use your api key from openai
    apiKey: "",
});

const openai = new OpenAIApi(configuration);

async function completion() {
    data = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: "Tweet about " + randomTopic() + " with hashtags",
        temperature: 1,
        max_tokens: 64,
    });
    return data;
}

async function getTweet() {
    const tweetData = await completion();
    const tweetText = tweetData.data.choices[0].text;
    return tweetText;
}

module.exports = getTweet;


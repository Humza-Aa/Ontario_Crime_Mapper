const tweets = require("../model/Tweets");

const getTweets = async (req, res) => {
  try {
    const tweetsData = await tweets.find({});
    res.status(200).json(tweetsData);
  } catch (error) {
    console.log(`error ${error}`);
  }
};

module.exports = { getTweets };

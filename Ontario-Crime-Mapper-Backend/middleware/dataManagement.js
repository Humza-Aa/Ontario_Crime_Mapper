const tweets = require("../model/Tweets");

const getTweets = async (req, res) => {
  try {
    const tweetsData = await tweets.find({});
    // console.log(tweetsData)
    res.status(200).send(tweetsData);
  } catch (error) {
    console.log(`error ${error}`);
  }
};

module.exports = { getTweets };

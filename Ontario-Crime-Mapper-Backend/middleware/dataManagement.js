const tweets = require("../model/Tweets");
const TPC = require("../model/TPC_Data");

const getTweets = async (req, res) => {
  try {
    const tweetsData = await tweets.find({});
    // console.log(tweetsData)
    res.status(200).send(tweetsData);
  } catch (error) {
    console.log(`error ${error}`);
  }
};

const getTPCData = async (req, res) => {
  try {
    const TPCData = (await TPC.find({ REPORT_YEAR: 2014 }));
    // console.log(TPCData);
    res.status(200).send(TPCData);
  } catch (error) {
    console.log(`Error with TPCData`);
    res.sendStatus(500);
  }
};

module.exports = { getTweets, getTPCData };

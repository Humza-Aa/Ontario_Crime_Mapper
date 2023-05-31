import axios from "./axios";

export default async function GetTweetData() {
  const getTweetsURL = "/api/getTweets"
  // console.log(e);
  try {
    const response = await axios.get(
      getTweetsURL,
      {
        withCredentials: true,
        // headers: {
        //   Cookie: e
        // }
      }
    );
    // console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
}

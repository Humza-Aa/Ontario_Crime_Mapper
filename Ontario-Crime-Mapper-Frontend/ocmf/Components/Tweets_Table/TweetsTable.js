import { useEffect, useState } from "react";
import GetTweetData from "../../api/GetTweetData";

export default function TweetsTable() {
  const [tweets, setTweets] = useState([])
  // const tweets = GetTweetData();

  useEffect(() => {
    setTweets(GetTweetData());
  }, [])
  // console.log(tweets)

  return (
    <>
      <div>
        {/* <table>
          <tr>
            <th>Status</th>
            <th>Updates</th>
            <th>Location</th>
            <th>Tweeted Time</th>
            <th>Image Url</th>
            <th>Description</th>
          </tr>
          {tweets.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.Status}</td>
                <td>{value.Updates}</td>
                <td>{value.Location}</td>
                <td>{value.TweetedTime}</td>
                <td>{value.ImageUrl}</td>
                <td>{value.Description}</td>
              </tr>
            );
          })}
        </table> */}
        {/* {tweets} */}
      </div>
    </>
  );
}

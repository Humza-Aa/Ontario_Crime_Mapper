import { useEffect, useState } from "react";
import GetTweetData from "../../api/GetTweetData";

// export async function getServerSideProps({ req }) {
//   // const { token } = cookie.parse(req.headers.cookie.refresh_jwt)
//   // console.log(req)
// const data = await GetTweetData(req);
//   console.log(data)

//   return {
//     props: { data },
//   };
// }

export default function TweetsTable(tweets) {
  // const [tweets, setTweets] = useState([]);
  // // const tweets = GetTweetData();

  // useEffect(() => {
  //   setTweets(GetTweetData());
  // }, []);
  // useEffect(() => {
  // console.log(tweets.props);
  // }, [tweets]);

  return (
    <>
      <div>
        <table>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Age</th>
            <th>Updates</th>
            <th>Location</th>
            <th>Tweeted Time</th>
            <th>Image Url</th>
            <th>Description</th>
          </tr>
          <tbody>
            {tweets.props.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.Status}</td>
                  <td>{value.Name}</td>
                  <td>{value.Age}</td>
                  <td>{value.Updates}</td>
                  <td>{value.Location}</td>
                  <td>{value.TweetedTime}</td>
                  <td>{value.ImageUrl}</td>
                  <td>{value.Description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

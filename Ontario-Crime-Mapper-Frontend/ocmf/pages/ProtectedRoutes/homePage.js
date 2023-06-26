import dynamic from "next/dynamic";
// import TweetsTable from "../../Components/Tweets_Table/TweetsTable";
import { useEffect, useState } from "react";
import TokenVerification from "../../Components/TokenVerification";
import GetTweetData from "../../api/GetTweetData";
import Header from "../../Components/Header/Header";


export async function getServerSideProps({ req }) {
  // const [tweets, setTweets] = useState([])

  const data = await TokenVerification(req);
  const tweets = await GetTweetData(req);

  // console.log(tweets.data[1]);
  // does not allow access to page if not logged in
  if (data.status != 200) {
    return {
      redirect: {
        destination: "/loginPage",
        permanent: false,
      },
    };
  }
  const tweet = tweets.data;
  const user = data.data.name;

  return {
    props: { data: [tweet, user] },
  };
}

export default function homePage({ data }) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    setTweets(data[0]);
  }, []);

  const MapWithNoSSR = dynamic(() => import("../../Components/Map/Map"), {
    ssr: false,
  });
  
  const TweetsTable = dynamic(() => import("../../Components/Tweets_Table/TweetsTable"), {
    ssr: false,
  });

  return (
    <>
      <Header props={data[1]} />
      <MapWithNoSSR props={tweets} />
      <TweetsTable props={tweets} />
    </>
  );
}

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import TokenVerification from "../../Components/TokenVerification";
import GetTweetData from "../../lib/GetTweetData";
import Header from "../../Components/Header/Header";
import { Box, Flex } from "@chakra-ui/react";
import BarGraph from "../../Components/Graphs/BarGraph";
import TPCData from "../../lib/TPCData";

export async function getServerSideProps({ req }) {
  const data = await TokenVerification(req);
  const tweets = await GetTweetData(req);
  const TCPData = await TPCData(req); 

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

export default function HomePage({ data }) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    setTweets(data[0]);
  }, [data]);

  const MapWithNoSSR = dynamic(() => import("../../Components/Map/Map"), {
    ssr: false,
  });

  const TweetsTable = dynamic(
    () => import("../../Components/Tweets_Table/TweetsTable"),
    {
      ssr: false,
    }
  );

  return (
    <>
      <Header props={data[1]} />
      <Box p="10px">
        <Flex wrap="wrap">
          <Box w={{ base: "100%" }}>
            <MapWithNoSSR props={tweets} />
          </Box>
          {/* <Box w={{ base: "100%", md: "30%" }} px="10px">
            <BarGraph />
            g
          </Box> */}
          <Box w={{ base: "100%" }} pt="10px">
            <TweetsTable props={tweets} />
          </Box>
          {/* <Box w={{ base: "100%", md: "40%" }}>s</Box> */}
        </Flex>
      </Box>
    </>
  );
}

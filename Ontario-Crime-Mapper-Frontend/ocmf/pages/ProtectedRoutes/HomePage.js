import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import TokenVerification from "../../Components/TokenVerification";
import GetTweetData from "../../lib/GetTweetData";
import Header from "../../Components/Header/Header";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { TPCDataY, CrimesPerYearByCategory } from "../../lib/TPCData";

export async function getServerSideProps({ req }) {
  const data = await TokenVerification(req);
  const tweets = await GetTweetData(req);
  const TCPData = await TPCDataY(req);
  const CrimesPerYByC = await CrimesPerYearByCategory(req);

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
    props: { data: [tweet, user, TCPData, CrimesPerYByC] },
  };
}

export default function HomePage({ data }) {
  const [tweets, setTweets] = useState([]);
  const [crimeData, setCrimeData] = useState([]);
  const [crimeDataBC, setCrimeDataBC] = useState([]);

  useEffect(() => {
    setCrimeDataBC(data[3]);
    setTweets(data[0]);
    setCrimeData(data[2]);
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

  const BarGraph = dynamic(() => import("../../Components/Graphs/BarGraph"), {
    ssr: false,
  });

  const LineGraph = dynamic(() => import("../../Components/Graphs/LineGraph"), {
    ssr: false,
  });

  return (
    <>
      <Header props={data[1]} />
      <Box p="10px">
        <Flex wrap="wrap" gap="10px">
          <Box w={{ base: "100%", md: "55%" }}>
            <Flex flexDir="column" gap="10px">
              <Box>
                <MapWithNoSSR props={tweets} />
              </Box>
              <Box>
                <TweetsTable props={tweets} />
              </Box>
            </Flex>
          </Box>
          <Box w={{ base: "100%", md: "44%" }}>
            <Box pb="10px">
              <BarGraph Cdata={crimeData} chartTitle="Crime Statistics" />
            </Box>
            <Divider />
            <Box pt="10px">
              <LineGraph
                Cdata={crimeDataBC}
                chartTitle="Crime Statistics Over the Years"
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

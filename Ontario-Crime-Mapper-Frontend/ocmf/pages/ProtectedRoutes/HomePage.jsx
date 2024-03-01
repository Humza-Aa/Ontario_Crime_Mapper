import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import TokenVerification from "../../Components/TokenVerification";
import GetTweetData from "../../lib/GetTweetData";
import Header from "../../Components/Header/Header";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Input,
  InputGroup,
  Select,
} from "@chakra-ui/react";
import { TPCDataY, CrimesPerYearByCategory } from "../../lib/TPCData";
import PieChart from "../../Components/Graphs/PieGraph";

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

  // const PieChart = dynamic(() => import("../../Components/Graphs/PieGraph"), {
  //   ssr: false,
  // });

  const years = data[3].map((entry) => entry._id);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const handleTabChange = (index) => {
    setSelectedYear(years[index]);
  };

  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    // Add more filters as needed
  });

  const uniqueCategories = ["Name", "Status", "Age", "Date", "Location"];

  const filterTweets = (tweets) => {
    return tweets.filter((tweet) => {
      if (filters.category === "all") {
        // If category is set to "All categories," check all properties for a match
        return Object.values(tweet).some((value) =>
          value.toLowerCase().includes(filters.search.toLowerCase())
        );
      } else {
        // Check the specified category for a match
        return tweet[filters.category]
          ?.toLowerCase()
          .includes(filters.search.toLowerCase());
      }
    });
  };

  return (
    <>
      <Header props={data[1]} />
      <Box p="10px">
        <Flex wrap="wrap" gap="10px">
          <Box w={{ base: "100%", lg: "55%" }}>
            <Flex flexDir="column" gap="10px">
              <Box>
                <MapWithNoSSR props={tweets} />
              </Box>
              <Box>
                <Box p="10px">
                  <Heading size="md" textAlign="center">
                    Toronto Police Twitter Feed
                  </Heading>
                </Box>
                <Box>
                  <Box>
                    <InputGroup mb={4}>
                      <Input
                        placeholder={`Search tweets by ${filters.category.toLowerCase()}...`}
                        value={filters.search}
                        onChange={(e) =>
                          setFilters({ ...filters, search: e.target.value })
                        }
                      />
                    </InputGroup>
                    <Select
                      value={filters.category}
                      onChange={(e) =>
                        setFilters({ ...filters, category: e.target.value })
                      }
                    >
                      <option value="all">All Categories</option>
                      {uniqueCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </Select>
                  </Box>
                </Box>
                <TweetsTable props={filterTweets(tweets)} />
              </Box>
            </Flex>
          </Box>
          <Box w={{ base: "100%", lg: "44%" }}>
            <Box>
              <Heading textAlign="center" size="md">
                Historical Crime Statistics
              </Heading>
            </Box>
            <Box
              pb="10px"
              w={{ base: "100%" }}
              h={{ base: "400px", lg: "300px" }}
            >
              <BarGraph Cdata={crimeData} chartTitle="Crime Statistics" />
            </Box>
            <Divider />
            <Box
              pb="10px"
              w={{ base: "100%" }}
              h={{ base: "400px", lg: "300px" }}
            >
              <LineGraph
                Cdata={crimeDataBC}
                chartTitle="Crime Statistics Over the Years"
              />
            </Box>
            <Divider />
            <Box
              pt="10px"
              w={{ base: "100%" }}
              h={{ base: "400px", lg: "300px" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Tabs onChange={handleTabChange} h="100%" w="100%">
                <TabList
                  w="100%"
                  overflowX={{ base: "auto", lg: "" }}
                  scrollbarWidth={{ base: "thin", lg: "thin" }}
                  scrollbarColor={{ base: "darkgrey lightgrey", lg: "" }}
                >
                  {years.map((year) => (
                    <Tab m="0" key={year}>
                      {year}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels h="100%">
                  <PieChart Cdata={crimeDataBC} selectedYear={selectedYear} />
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

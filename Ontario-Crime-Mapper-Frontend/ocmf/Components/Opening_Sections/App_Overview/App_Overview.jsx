import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import Data from "../../../Data/App_Overview/App_Overview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App_Overview() {
  return (
    <>
      <Box p="30px">
        <Center>
          <Box pb="40px">
            <Heading>Our Features</Heading>
          </Box>
        </Center>
        <Box>
          <Flex
            justifyContent="center"
            alignItems="center"
            wrap="wrap"
            gap="10px"
          >
            {Data.featureList.map((feature, key) => {
              return (
                <Card
                  direction={{ base: "column", sm: "row" }}
                  variant="none"
                  p="10px"
                  key={key}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 50 50"
                    >
                      <path
                        fill="white"
                        d="M 25 2 C 12.264481 2 2 12.264481 2 25 C 2 37.735519 12.264481 48 25 48 C 37.735519 48 48 37.735519 48 25 C 48 12.264481 37.735519 2 25 2 z M 25 4 C 36.664481 4 46 13.335519 46 25 C 46 36.664481 36.664481 46 25 46 C 13.335519 46 4 36.664481 4 25 C 4 13.335519 13.335519 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 C 22.81904 22.572762 22 23.655572 22 25 C 22 25.471362 22.108361 25.906202 22.289062 26.296875 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.703125 27.710938 C 24.093798 27.891639 24.528638 28 25 28 C 26.7 28 28 26.7 28 25 C 28 23.655572 27.18096 22.572762 26 22.173828 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"
                      ></path>
                    </svg>
                  </Box>

                  <Box>
                    <CardBody>
                      <Heading size="md">{Data.featureList[0].Title}</Heading>
                      <Text py="2">{Data.featureList[0].Description}</Text>
                    </CardBody>
                  </Box>
                </Card>
              );
            })}
          </Flex>
        </Box>
      </Box>
    </>
  );
}

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
} from "@chakra-ui/react";

function LocationCheck(location) {
  if (location == undefined) {
    return "No Location Given";
  }
  if (typeof location == "string") {
    return location;
  }
  var longest = location.sort(function (a, b) {
    return b.length - a.length;
  })[0];

  return longest;
}

export default function TweetsTable(tweet) {
  // console.log(tweet)
  return (
    <>
      <TableContainer w="100%">
        <Table variant="simple" size="sm">
          <Thead bg="blackAlpha.500">
            <Tr>
              <Th>Person Information</Th>
              <Th>Crime Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tweet.props.map((value, key) => {
              return (
                <>
                  <Tr key={key}>
                    <Td w="100px">
                      <Flex >
                        {value.ImageUrl != "No Image" ? (
                          <>
                            <Box>
                              <img src={value.ImageUrl} alt="" />
                            </Box>
                          </>
                        ) : (
                          ""
                        )}
                        <Box>
                          <b>Name:</b> {value.Name ? value.Name : "Unknown"}{" "}
                          <br /> <b>Age:</b> {value.Age ? value.Age : "Unknown"}{" "}
                          <br />
                          <b>Location:</b> {LocationCheck(value.Location)}
                        </Box>
                      </Flex>
                    </Td>

                    {/* <Td w="50px">{value.Description}</Td> */}
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

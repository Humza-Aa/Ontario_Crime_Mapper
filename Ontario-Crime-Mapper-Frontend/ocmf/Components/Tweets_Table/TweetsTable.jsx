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
  Center,
} from "@chakra-ui/react";
import PaginationComponent from "./Pagination/Pagination";
import { useState } from "react";

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
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const paginatedData = tweet.props.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <>
      <TableContainer scrollBehavior="auto" overflow-y="auto">
        <Table variant="simple" size="sm">
          <Thead bg="blackAlpha.500">
            <Tr>
              <Th position="sticky" top="0">
                Person Information
              </Th>
              <Th position="sticky" top="0">
                Crime Description
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {paginatedData.map((value, key) => {
              return (
                <>
                  <Tr whiteSpace="normal">
                    <Td w="50%">
                      <b>Status:</b>{" "}
                      {/* <Box h="fit-content" whiteSpace="normal"> */}
                      {value.Status}
                      {/* </Box>{" "} */}
                      <br />
                      <b>Name:</b> {value.Name ? value.Name : "Unknown"} <br />{" "}
                      <b>Age:</b> {value.Age ? value.Age : "Unknown"} <br />
                      <b>Location:</b>{" "}
                      {/* <Box h="fit-content" whiteSpace="normal"> */}
                      {LocationCheck(value.Location)}
                      {/* </Box> */}
                    </Td>
                    <Td whiteSpace="normal">{value.Description}</Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
          {/* <Tfoot w="100%" display="flex" justifyContent="center"> */}
          <TableCaption m="0">
            <PaginationComponent
              pageCount={Math.ceil(tweet.props.length / itemsPerPage)}
              onPageChange={handlePageChange}
            />
          </TableCaption>

          {/* </Tfoot> */}
        </Table>
      </TableContainer>
    </>
  );
}

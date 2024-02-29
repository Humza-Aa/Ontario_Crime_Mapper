import { Box, Input, InputGroup, Select } from "@chakra-ui/react";
import { useState } from "react";

const filterTweets = (tweets) => {
  return tweets.filter((tweet) => {
    const matchesSearch = tweet.content
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesCategory =
      filters.crimeCategory === "all" ||
      tweet.category === filters.crimeCategory;

    return matchesSearch && matchesCategory;
  });
};

export default function Filter() {
  const [filters, setFilters] = useState({
    search: "",
    crimeCategory: "all",
    // Add more filters as needed
  });
  return (
    <>
      <Box>
        <InputGroup>
          <Input
            placeholder="Search tweets by name..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </InputGroup>
        <Select
          value={filters.crimeCategory}
          onChange={(e) =>
            setFilters({ ...filters, crimeCategory: e.target.value })
          }
        >
          <option value="all">All Categories</option>
          <option value="Status">Status</option>
          <option value="Name">Name</option>
          <option value="Age">Age</option>
          <option value="Date">Status</option>
          
        </Select>
      </Box>
    </>
  );
}

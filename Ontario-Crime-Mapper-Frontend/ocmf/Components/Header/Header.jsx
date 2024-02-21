"use client";
import logout from "../../lib/logout";
import { useRouter } from "next/navigation";
import AuthContext from "../../context/AuthProvider";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Data from "../../Data/Header/Header";

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
      color="whiteAlpha.600"
      fontSize="16px"
    >
      {children}
    </Box>
  );
};

export default function Header(username) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        backdropFilter="blur(10px) hue-rotate(0deg)"
        pos="sticky"
        top="0"
        zIndex="10"
        bg="blackAlpha.500"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading fontSize="2xl">CrimeVue</Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Data.HeaderLinks.map((link) => (
                <NavLink key={Data.HeaderLinks}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Link href={`${Data.HeaderBtns[1].href}`}>
              <Button
                variant={"outline"}
                colorScheme={"teal"}
                size={"sm"}
                mr={4}
              >
                {Data.HeaderBtns[1].name}
              </Button>
            </Link>
            <Link href={`${Data.HeaderBtns[0].href}`}>
              <Button colorScheme={"teal"} variant={"solid"} size={"sm"}>
                {Data.HeaderBtns[0].name}
              </Button>
            </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Data.HeaderLinks.map((link) => (
                <NavLink key={link}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}


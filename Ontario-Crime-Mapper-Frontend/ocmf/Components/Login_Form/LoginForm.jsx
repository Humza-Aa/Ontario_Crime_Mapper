"use client";
import { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../lib/axios";
import loginImage from "../../public/loginImage.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import cookie from "js-cookie";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LoginForm() {
  const router = useRouter();
  // const {auth, setAuth} = useContext(AuthContext)

  const { setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const emailRef = useRef();
  const errorRef = useRef();

  const login_url = "/api/User/login";

  // useEffect(() => {
  //   emailRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [email, password]);

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        login_url,
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log(response.data.refreshToken);
      const accessToken = response.data.accessToken;
      cookie.set("refresh_jwt", response.data.refreshToken, { expires: 24 });
      setAuth({ email, password, accessToken });
      router.push(`${window.location.origin}/ProtectedRoutes/HomePage`);
      setLoggedIn(true);
      // setEmail("");
      // setPassword("");
    } catch (error) {
      console.log(error);
      if (!error?.response) {
        setErrorMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrorMsg(`Email or password incorrect`);
      } else if (error.response?.status === 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Login Failed");
      }
      errorRef.current.focus();
    }
  }

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>

          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={"teal.400"}>Forgot password?</Text>
                </Stack>
                <Button
                  bg={"teal"}
                  color={"white"}
                  _hover={{
                    bg: "teal.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

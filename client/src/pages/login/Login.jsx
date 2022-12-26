import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Fields cant be empty !");
      return;
    } else if (password.length < 6) {
      alert("Password should be of atleast 6 letters");
    }
    try {
      const res = await fetch(
        "https://sephorabackend-production.up.railway.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      )
        .then((res) => res.json())
        .then((e) => {
          localStorage.setItem("token", JSON.stringify(e.accessToken) || "");
          console.log(e);
        })
        .catch((err) => {
          console.error("Error:", err);
        });

      alert("Login Sucessful");
      navigate("/");
    } catch (error) {
      alert("Wrong Credentials....!");
    }
  };

  return (
    <Box width={"600px"} m={"auto"} mt={"50px"}>
      <Flex
        align={"center"}
        justify={"center"}
        mt={"50px"}
        bg={"white"}
        width={"550px"}
      >
        <Stack spacing={8} mx={"auto"} width={"550px"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Login</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form method="POST" onSubmit={handleLogin}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    {/* <Checkbox>Remember me</Checkbox> */}
                    <Link to="#" color={"black"}>
                      Forgot password?
                    </Link>
                  </Stack>
                  <Button
                    bg={"black"}
                    color={"white"}
                    type="submit"
                    _hover={{
                      bg: "pink",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
              <Center>or</Center>
              <Center>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Center>
              <Center py={2}>
                Don't have an account?
                <Link to="/signup">
                  {" "}
                  <Text as="u">SignUp</Text>
                </Link>{" "}
              </Center>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

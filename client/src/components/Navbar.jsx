import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box
      bg={"gray.700"}
      color="white"
      display={"flex"}
      justifyContent="space-around"
      alignItems={"center"}
      fontSize={25}
      boxShadow={"lg"}
      p="5"
    >
      <Link to="/">
        <Text display={"flex"} justifyContent={"center"} alignItems={"center"}>
          {" "}
          <Image
            w={"60px"}
            src="http://khanglobalstudies.com/images/logos/kgs-logo.png"
          />
          KGS
        </Text>
      </Link>
      <Link to="/">
        <Text>Dashboard</Text>
      </Link>
      <Link to="/login">
        <Text>Login</Text>
      </Link>
      <Link to="/signup">
        <Text>Signup</Text>
      </Link>
    </Box>
  );
};

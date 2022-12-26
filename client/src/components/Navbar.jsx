import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <Box
      bg={"white"}
      color="grey"
      display={"flex"}
      justifyContent="space-around"
      fontSize={25}
      boxShadow={"lg"}
      p="5"
    >
      <Link to="/">
        <Text>Admin Panel</Text>
      </Link>
      <Link to="/">
        <Text>Home</Text>
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



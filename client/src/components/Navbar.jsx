import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getLoggedUserName, logoutUser } from "../redux/user/action";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { loggedUserName, loggedUser } = useSelector((store) => store.user);

  console.log(loggedUserName);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

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
      {loggedUserName.isAdmin == true ? (
        <Button colorScheme="teal" variant="solid">
          <Link to="/add-course">ADD COURSE</Link>
        </Button>
      ) : null}

      {loggedUser ? (
        <>
          <Button colorScheme="teal" variant="solid">
            {loggedUserName && loggedUserName.name}
          </Button>

          <Button
            colorScheme="teal"
            variant="solid"
            onClick={() => handleLogout()}
          >
            LOGOUT
          </Button>
        </>
      ) : (
        <>
          <Link to="/login">
            <Text>Login</Text>
          </Link>
          <Link to="/signup">
            <Text>Signup</Text>
          </Link>
        </>
      )}
    </Box>
  );
};

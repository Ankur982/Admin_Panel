import React, { useEffect } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Select,
  Textarea,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../../redux/course/action";

export const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [teacher, setTeacher] = useState("");
  const [duration, setDuration] = useState("");
  const [validity, setValidity] = useState("");
  const [imageLink, setImageLink] = useState("");
  const dispatch = useDispatch()
  const { loggedUser } = useSelector((store) => store.user);



  const handleAddTicket = async (e) => {
    e.preventDefault();
  
    const newCourse = {
      title: title,
      description: description,
      price: price,
      teacher: teacher,
      duration: duration,
      validity: validity,
      imageLink: imageLink
    };

    dispatch(createCourse(newCourse, loggedUser.accessToken))
    
  };

  return (
    <Box>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          width={"700px"}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>CREATE COURSE</Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <form method="POST" onSubmit={(e) => handleAddTicket(e)}>
              <Stack spacing={4}>
                <FormControl id="title">
                  <FormLabel>Title</FormLabel>
                  <Input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                  />
                </FormControl>

                <FormControl id="description">
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                  />
                </FormControl>

                <FormControl id="price">
                  <FormLabel>Price</FormLabel>
                  <Input
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                  />
                </FormControl>

                <FormControl id="teacher">
                  <FormLabel>Teacher</FormLabel>
                  <Select
                    onChange={(e) => setTeacher(e.target.value)}
                    placeholder="Select teacher"
                    fontWeight={"bold"}
                  >
                    <option value="evaluation">Evaluation</option>
                    <option value="product">Product</option>
                    <option value="support">Support</option>
                  </Select>
                </FormControl>

                
                <FormControl id="duration">
                  <FormLabel>Duration</FormLabel>
                  <Input
                    onChange={(e) => setDuration(e.target.value)}
                    type="number"
                  />
                </FormControl>

                
                <FormControl id="validity">
                  <FormLabel>Validity</FormLabel>
                  <Input
                    onChange={(e) => setValidity(e.target.value)}
                    type="number"
                  />
                </FormControl>

                
                <FormControl id="imageLink">
                  <FormLabel>ImageLink</FormLabel>
                  <Input
                    onChange={(e) => setImageLink(e.target.value)}
                    type="text"
                  />
                </FormControl>

                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  ></Stack>
                  <Button
                    bg={"black"}
                    color={"white"}
                    type="submit"
                    _hover={{
                      bg: "grey",
                    }}
                  >
                    ADD COURSE
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

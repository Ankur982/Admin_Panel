import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalComponent from "../../components/Modal";

export const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setID] = useState("");
  const { courses } = useSelector((store) => store.course);
  const dispatch = useDispatch();

  //-----------modal----------------
  const handleClick = (item) => {
    setIsModalVisible(true);
    setID(item.id);
  };

  

  return (
    <div>
      <Heading>All Courses Available</Heading>
      <SimpleGrid columns={3} w="90%" margin="auto" mt="10" spacing={4}>
        {courses &&
          courses.map((el, i) => (
            <Box
              key={i}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              p="4"
              pb="8"
              bg="#d9d9d9"
            >
              <Image
                borderRadius="50px"
                w="200px"
                m="auto"
                src={el.imageLink}
                alt={el.title}
              />
            
              <Heading>{el.title}</Heading>
              <Text mb="3" mt="2">
                {el.description}
              </Text>
              <Box
                display={"flex"}
                gap="3"
                m="auto"
                w="80%"
                justifyContent="space-around"
                mb="4"
              >
                <Button>{Math.floor(Math.random() * 500)} User</Button>
              </Box>
              <Box
                fontSize={12}
                display={"flex"}
                gap="3"
                m="auto"
                w="80%"
                justifyContent="space-around"
              >
                <Button
                  onClick={() => handleClick(el)}
                  bg="#26a541"
                  color="#ffff"
                >
                  EDIT COURSE
                </Button>
                <Button
                  bg="red"
                  color="#ffff"
                >
                  DELETE COURSE
                </Button>
              </Box>
            </Box>
          ))}
      </SimpleGrid>
      {id.length != 0 ? (
        <ModalComponent
          isOpen={isModalVisible}
          setIsOpen={setIsModalVisible}
          id={id}
        />
      ) : (
        setTimeout(() => {
          <ModalComponent
            isOpen={isModalVisible}
            setIsOpen={setIsModalVisible}
            id={id}
          />;
        }, 5)
      )}
    </div>
  );
};

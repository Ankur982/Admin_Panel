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
import { deleteCourse, getCourse } from "../../redux/course/action";

export const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setID] = useState("");
  const { loading, error, courses } = useSelector((store) => store.course);
  const { loggedUserName, loggedUser } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleClick = (item) => {
    setIsModalVisible(true);
    setID(item._id);
  };

  const handleDeleteCourse = (id) => {
    dispatch(deleteCourse(loggedUser.accessToken, id));
    setTimeout(() => {
      dispatch(getCourse(loggedUser.accessToken));
    }, 100);
    alert("Course Deleted Succesfully...!");
  };

  useEffect(() => {
    dispatch(getCourse(loggedUser.accessToken));
  }, []);

  return (
    <Box m={"auto"} textAlign={"center"}>
      <Heading mt={"30px"}>Top Courses from Our Experts</Heading>
      {error ? <Heading color="red">Error Loading Courses...</Heading> : ""}
      {loading ? <Heading color="teal">Loading Courses...</Heading> : ""}
      <SimpleGrid columns={2} w="90%" margin="auto" mt="10" spacing={4}>
        {courses &&
          courses.map((el, i) => (
            <Box
              key={i}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              p="4"
              pb="8"
            >
              <Image
                w="500px"
                borderRadius={"20px"}
                m="auto"
                src={el.imageLink}
                alt={el.title}
              />

              <Heading mt={"10px"}>Title: {el.title}</Heading>
              <Heading as="h4" size="md" mb="3" mt="2">
                Description: {el.description}
              </Heading>
              <Heading as="h4" size="md" mb="3" mt="2">
                Price: {el.price} {"₹"}
              </Heading>
              <Heading as="h4" size="md" mb="3" mt="2">
                Teacher: {el.teacher}
              </Heading>
              <Heading as="h4" size="md" mb="3" mt="2">
                Duration: {el.duration} {"Months"}
              </Heading>
              <Heading as="h4" size="md" mb="3" mt="2">
                Validity: {el.validity} {"Months"}
              </Heading>
              <Box
                display={"flex"}
                gap="3"
                m="auto"
                w="80%"
                justifyContent="space-around"
                mb="4"
              >
                <Button>
                  Current Active user : {Math.floor(Math.random() * 500)} Users
                </Button>
              </Box>

              {loggedUserName.isAdmin ? (
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
                    bg="teal"
                    color="#ffff"
                  >
                    EDIT COURSE
                  </Button>
                  <Button
                    bg="red"
                    color="#ffff"
                    onClick={() => handleDeleteCourse(el._id)}
                  >
                    DELETE COURSE
                  </Button>
                </Box>
              ) : null}
            </Box>
          ))}
      </SimpleGrid>
      {id ? (
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
        }, 50)
      )}
    </Box>
  );
};

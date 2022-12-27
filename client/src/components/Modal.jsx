import {
  Button,
  FormLabel,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse, updateCourse } from "../redux/course/action";

const initial = {
  title: "",
  description: "",
  price: "",
  teacher: "",
  duration: "",
  validity: "",
  imageLink: "",
};

const ModalComponent = ({ isOpen, setIsOpen, id }) => {
  const [course, setCourse] = useState(initial);

  const { loggedUserName, loggedUser } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const onClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateCourse(loggedUser.accessToken, id, course));
    setTimeout(() => {
      dispatch(getCourse(loggedUser.accessToken));
    }, 100);
    alert("Course Updated Succesfully...!");
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Edit Course Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="10">
            <Grid
              display="grid"
              ml="4"
              pb="4"
              borderRadius={10}
              width="80%"
              m={"auto"}
              textAlign={"center"}
            >
              <form onSubmit={(e) => handleEdit(e)} textAlign={"center"}>
                <FormLabel>Update Title</FormLabel>
                <Input
                  borderBottom="1px"
                  type="text"
                  value={course.title}
                  placeholder="Enter New Title...."
                  name="title"
                  onChange={handleChange}
                />
                <FormLabel mt={"10px"}>Update Description</FormLabel>
                <Input
                  mb="2"
                  mt="2"
                  borderBottom="1px"
                  name="description"
                  value={course.description}
                  type="text"
                  placeholder="Enter New Description"
                  onChange={handleChange}
                />
                <FormLabel mt={"10px"}>Update Price</FormLabel>
                <Input
                  borderBottom="1px"
                  name="number"
                  type="text"
                  value={course.price}
                  placeholder="Enter Updated Price..."
                  onChange={handleChange}
                />
                <FormLabel mt={"10px"}>Update Teacher</FormLabel>
                <Input
                  borderBottom="1px"
                  type="text"
                  value={course.teacher}
                  placeholder="Enter New Teacher Name...."
                  name="teacher"
                  onChange={handleChange}
                />
                <FormLabel mt={"10px"}>Update Duration</FormLabel>
                <Input
                  mb="2"
                  mt="2"
                  borderBottom="1px"
                  name="duration"
                  value={course.duration}
                  type="number"
                  placeholder="Enter New Duration"
                  onChange={handleChange}
                />
                <FormLabel mt={"10px"}>Update Validity</FormLabel>
                <Input
                  borderBottom="1px"
                  name="validity"
                  type="text"
                  value={course.validity}
                  placeholder="Enter Updated Validity..."
                  onChange={handleChange}
                />
                <FormLabel mt={"10px"}>Update ImageLink</FormLabel>
                <Input
                  mb="2"
                  mt="2"
                  borderBottom="1px"
                  name="imageLink"
                  value={course.imageLink}
                  type="text"
                  placeholder="Enter New imageLink"
                  onChange={handleChange}
                />

                <Button w="100%" bg="teal" mt="3" type="submit">
                  Edit
                </Button>
              </form>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;

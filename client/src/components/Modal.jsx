import {
  Button,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const initial = {
  title: "",
  description: "",
  price: 0,
  teacher: "",
  duration: 0,
  validity: 0,
  imageLink: "",
};

const ModalComponent = ({ isOpen, setIsOpen, id }) => {
  const [course, setCourse] = useState(initial);
  const { courses } = useSelector((store) => store.course);

  const dispatch = useDispatch();

  const onClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = (e) => {
    
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Course Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="10">
            <Grid
              display="grid"
              textAlign={"left"}
              ml="4"
              pb="4"
              borderRadius={10}
              width="80%"
            >
              <form onSubmit={handleSubmit}>
                <Input
                  borderBottom="1px"
                  type="text"
                  value={course.title}
                  placeholder="Enter New Title...."
                  required
                  name="title"
                  onChange={handleChange}
                />
                <Input
                  mb="2"
                  mt="2"
                  borderBottom="1px"
                  name="description"
                  value={course.description}
                  type="text"
                  required
                  placeholder="Enter New Description"
                  onChange={handleChange}
                />
                <Input
                  borderBottom="1px"
                  name="number"
                  type="text"
                  value={course.price}
                  placeholder="Enter Updated Price..."
                  required
                  onChange={handleChange}
                />

                <Input
                  borderBottom="1px"
                  type="text"
                  value={course.teacher}
                  placeholder="Enter New Teacher Name...."
                  required
                  name="teacher"
                  onChange={handleChange}
                />
                <Input
                  mb="2"
                  mt="2"
                  borderBottom="1px"
                  name="duration"
                  value={course.duration}
                  type="number"
                  required
                  placeholder="Enter New Duration"
                  onChange={handleChange}
                />
                <Input
                  borderBottom="1px"
                  name="validity"
                  type="text"
                  value={course.validity}
                  placeholder="Enter Updated Validity..."
                  required
                  onChange={handleChange}
                />

                <Input
                  mb="2"
                  mt="2"
                  borderBottom="1px"
                  name="imageLink"
                  value={course.imageLink}
                  type="text"
                  required
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

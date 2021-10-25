import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Center,
  Button,
  Stack,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";

const UserForm = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          dni: "",
          edad: "",
          genero: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Box
          objectFit="initial"
          w={["90%", "70%", "60%"]}
          borderRadius="2rem"
          border="2px"
          borderColor="white"
          mt="2rem"
          mx="auto"
          color="white"
          bg="teal"
        >
          <Heading
            mb="1rem"
            mt="1rem"
            textAlign="center"
            fontFamily="Mulish"
            fontSize={["2rem", "2rem", "3.5rem"]}
            fontWeight="600"
            color="White"
          >
            Formulario de Registro
          </Heading>

          <Box p="1.5rem" d="flex" justifyContent={["center", "flex-end"]}>
            <Button
              borderRadius="0.5rem"
              // onClick={handleSeeUsers}
              colorScheme="yellow"
              w={["60%", "50%", "30%"]}
            >
              + Ver Usuarios
            </Button>
          </Box>

          <Form>
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mx="auto" p="1.5rem">
              <FormControl borderRadius="1rem">
                {/* <FormLabel htmlFor="nombre">Nombre</FormLabel> */}
                <Field
                  label="nombre"
                  id="nombre"
                  p="1rem"
                  name="nombre"
                  color="black"
                  borderColor="black"
                  placeholder="Nombre"
                  bg="white"
                  type="text"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="nombre">Apellido</FormLabel>
                <Field
                  id="apellido"
                  name="apellido"
                  p="1rem"
                  color="black"
                  borderRadius="1rem"
                  borderColor="black"
                  placeholder="Apellido"
                  bg="white"
                  type="text"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="nombre">DNI</FormLabel>
                <Field
                  w="100%"
                  id="dni"
                  name="dni"
                  p="1rem"
                  // color="black"
                  borderRadius="1rem"
                  borderColor="black"
                  placeholder="Dni"
                  bg="white"
                  type="number"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Genero</FormLabel>
                <RadioGroup>
                  <label>
                    <Field type="radio" name="genero" value="Masculino" />
                    Masculino
                  </label>
                  <label>
                    <Field type="radio" name="genero" value="Femenino" />
                    Femenino
                  </label>
                </RadioGroup>
              </FormControl>
            </SimpleGrid>

            <button type="submit">Submit</button>
          </Form>
        </Box>
      </Formik>
    </Box>
  );
};

export default UserForm;

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
import { Formik, Form, Field } from "formik";
import TextField from "./TextField";
import { useField, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // const validate = Yup.object({
  //   nombre: Yup.string()
  //     .min(3, "Debe tener 3 caracteres como minimo")
  //     .max(10, "Debe contener 8 caracteres como maximo")
  //     .required("Campo requerido"),

  //   apellido: Yup.string()
  //     .min(3, "Debe tener 3 caracteres como minimo")
  //     .max(10, "Debe contener 8 caracteres como maximo")
  //     .required("Campo requerido"),

  //   dni: Yup.string()
  //     .min(7, "Debe tener 7 caracteres como minimo")
  //     .max(8, "Debe contener 8 caracteres como maximo")
  //     .required("Campo requerido"),

  //   edad: Yup.number()
  //     .min(18, "Sos menor de Edad")
  //     .max(90, "Edad invalida")
  //     .required("Campo requerido"),
  // });
  return (
    <Formik
      initialValues={{
        cliente: null,
        nombre: "",
        apellido: "",
        dni: "",
        edad: "",
        genero: "",
        estado: "",
        maneja: "",
        lentes: "",
        diabetico: "",
        enfermedad: "",
        tipoEnfermedad: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Box>
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
                <TextField label="Nombre" name="nombre" type="text" />
                <TextField label="Apellido" name="apellido" type="text" />
                <TextField label="Dni" name="dni" type="number" />
                <TextField label="Edad" name="edad" type="number" />
                <TextField label="Genero" name="genero" type="radio" />

                <FormControl mt="1rem">
                  <FormLabel> Genero </FormLabel>

                  <RadioGroup
                  //   vaule={genero}
                  >
                    <Stack spacing={5} direction="row">
                      <Radio
                        value="Masculino"
                        name="genero"
                        colorScheme="yellow"
                      >
                        Masculino
                      </Radio>
                      <Radio
                        value="Femenino"
                        name="genero"
                        colorScheme="yellow"
                      >
                        Femenino
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </SimpleGrid>
              <Center>
                <Button
                  type="submit"
                  colorScheme="yellow"
                  borderRadius="0.5rem"
                  m="2rem"
                  w="100%"
                >
                  Enviar
                </Button>
              </Center>
            </Form>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default FormikForm;

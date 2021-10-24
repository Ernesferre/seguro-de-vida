import React, { useState, useContext } from "react";
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
} from "@chakra-ui/react";
import { StoreContext } from "./Context/StoreContext";
import { useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory();

  const { data, addUser } = useContext(StoreContext);

  console.log("data: ", data);

  const [usuario, setUsuario] = useState({
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
  });

  const actualizarState = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const {
    nombre,
    apellido,
    dni,
    edad,
    genero,
    maneja,
    lentes,
    diabetico,
    enfermedad,
    tipoEnfermedad,
  } = usuario;

  const handleSeeUsers = () => {
    history.push("/showusers");
  };

  // Cuando el usuario presiona agregar cita
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HOLA");

    // Validacion de formulario

    if (
      nombre.trim() === "" ||
      nombre.trim() === "" ||
      dni.trim() === "" ||
      edad.trim() === "" ||
      genero === "" ||
      maneja === "" ||
      lentes === "" ||
      diabetico === "" ||
      enfermedad === ""
    ) {
      console.log("falta llenar algun campo");
      return;
    }

    if (enfermedad === "Si" && tipoEnfermedad === "") {
      console.log("falta llenar Enfermedad");
      return;
    }

    addUser(usuario);

    setTimeout(function () {
      history.push("/showusers");
    }, 1500);
    console.log("Hola desde Form");
    console.log(usuario);

    setUsuario({
      nombre: "",
      apellido: "",
      dni: "",
      edad: "",
      genero: "",
      maneja: "",
      lentes: "",
      diabetico: "",
      enfermedad: "",
      tipoEnfermedad: "",
    });
  };

  return (
    <Box
      objectFit="initial"
      maxWidth={["90%", "70%", "50%"]}
      borderRadius="2rem"
      border="2px"
      borderColor="white"
      mt="2rem"
      mx="auto"
      // my="auto"
      color="white"
      bg="teal"
      p={3}
    >
      <Heading mb="1rem" textAlign="center">
        Formulario
      </Heading>

      <Button mb="1rem" onClick={handleSeeUsers} ml="4rem">
        Ver Usuarios
      </Button>

      <form onSubmit={handleSubmit}>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} w="80%" mx="auto">
          <FormControl mb="1rem" isRequired>
            <FormLabel> Nombre </FormLabel>
            <Input
              color="black"
              borderColor="black"
              // w={["10rem", "15rem", "20rem"]}
              bg="white"
              name="nombre"
              type="text"
              id="nombre"
              value={nombre}
              onChange={actualizarState}
            />
          </FormControl>

          <FormControl mb="1rem" isRequired>
            <FormLabel> Apellido </FormLabel>
            <Input
              color="black"
              borderColor="black"
              // w={["10rem", "15rem", "20rem"]}
              bg="white"
              name="apellido"
              type="text"
              id="nombre"
              value={apellido}
              onChange={actualizarState}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel> Identificacion </FormLabel>
            <Input
              name="dni"
              color="black"
              borderColor="black"
              // w={["10rem", "15rem", "20rem"]}
              bg="white"
              type="text"
              id="dni"
              value={dni}
              onChange={actualizarState}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel> Edad </FormLabel>
            <Input
              name="edad"
              borderColor="black"
              // w={["10rem", "15rem", "20rem"]}
              bg="white"
              color="black"
              type="number"
              id="edad"
              value={edad}
              onChange={actualizarState}
            />
          </FormControl>

          <FormControl mt="1rem" isRequired>
            <FormLabel> Genero </FormLabel>

            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio
                  value="Masculino"
                  name="genero"
                  checked={true}
                  onChange={actualizarState}
                >
                  Masculino
                </Radio>
                <Radio
                  value="Femenino"
                  name="genero"
                  checked={false}
                  onChange={actualizarState}
                >
                  Femenino
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl mt="1rem" isRequired>
            <FormLabel> Maneja ? </FormLabel>

            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio value="Si" name="maneja" onChange={actualizarState}>
                  Si
                </Radio>
                <Radio value="No" name="maneja" onChange={actualizarState}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl mt="1rem" isRequired>
            <FormLabel> Usa Lentes ? </FormLabel>

            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio value="Si" name="lentes" onChange={actualizarState}>
                  Si
                </Radio>
                <Radio value="No" name="lentes" onChange={actualizarState}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl mt="1rem" isRequired>
            <FormLabel> Es Diabetico ? </FormLabel>

            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio value="Si" name="diabetico" onChange={actualizarState}>
                  Si
                </Radio>
                <Radio value="No" name="diabetico" onChange={actualizarState}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl mt="1rem" isRequired>
            <FormLabel> ¿Padece alguna otra enfermedad? </FormLabel>

            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio value="Si" name="enfermedad" onChange={actualizarState}>
                  Si
                </Radio>
                <Radio value="No" name="enfermedad" onChange={actualizarState}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl mb="1rem" mt="1rem">
            <FormLabel> En caso positivo indicar cual: </FormLabel>
            <Input
              color="black"
              borderColor="black"
              // w={["10rem", "15rem", "20rem"]}
              bg="white"
              name="tipoEnfermedad"
              type="text"
              id="nombre"
              value={tipoEnfermedad}
              onChange={actualizarState}
            />
          </FormControl>
        </SimpleGrid>
        <Center>
          <Button type="submit" colorScheme="teal" mt="3rem" mb="2rem" w="80%">
            Enviar
          </Button>
        </Center>
      </form>
    </Box>
  );
};

export default Form;

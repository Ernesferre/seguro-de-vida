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
  Text,
} from "@chakra-ui/react";
import { StoreContext } from "./Context/StoreContext";
import { useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory();

  const { data, addUser } = useContext(StoreContext);

  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();

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
      setError(true);
      return;
    }

    if (enfermedad === "Si" && tipoEnfermedad === "") {
      setError1(true);
      return;
    }

    addUser(usuario);

    setTimeout(function () {
      history.push("/showusers");
    }, 1500);

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
    <Box>
      <Heading
        mb="1rem"
        mt="1rem"
        textAlign="center"
        fontFamily="Mulish"
        fontSize="3.5rem"
        fontWeight="600"
        color="black"
      >
        Formulario
      </Heading>

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
        <Box p="1.5rem" d="flex" justifyContent={["center", "flex-end"]}>
          <Button
            borderRadius="0.5rem"
            onClick={handleSeeUsers}
            colorScheme="yellow"
            w={["60%", "50%", "20%"]}
          >
            Ver Usuarios
          </Button>
        </Box>

        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} mx="auto" p="1.5rem">
            <FormControl isRequired>
              <FormLabel> Nombre </FormLabel>
              <Input
                color="black"
                borderColor="black"
                placeholder="Nombre"
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
                placeholder="Apellido"
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
                placeholder="Ingrese DNI sin puntos"
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
                placeholder="Edad"
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
                  <Radio
                    value="Si"
                    name="enfermedad"
                    onChange={actualizarState}
                  >
                    Si
                  </Radio>
                  <Radio
                    value="No"
                    name="enfermedad"
                    onChange={actualizarState}
                  >
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
                placeholder="Enfermedad"
                bg="white"
                name="tipoEnfermedad"
                type="text"
                id="nombre"
                value={tipoEnfermedad}
                onChange={actualizarState}
              />
              {error1 && (
                <Text color="yellow.400" fontWeight="bold">
                  Indique Enfermedad
                </Text>
              )}
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
        </form>
      </Box>
    </Box>
  );
};

export default Form;

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
import { UserValidations } from "./Validations/UserValidations";

const Form = () => {
  const history = useHistory();

  const { addUser } = useContext(StoreContext);

  // const [errorName, setErrorName] = useState(false);
  // const [errorApe, setErrorApe] = useState(false);
  // const [errorDni, setErrorDni] = useState(false);
  // const [errorEdad, setErrorEdad] = useState(false);
  // const [errorGenero, setErrorGenero] = useState(false);
  // const [errorManeja, setErrorManeja] = useState(false);
  // const [errorLentes, setErrorLentes] = useState(false);
  // const [errorDiab, setErrorDiab] = useState(false);
  // const [errorEnf, setErrorEnf] = useState(false);
  const [errorTE, setErrorTE] = useState(false);

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
    setErrorName(false);
    setErrorDni(false);

    //Validaciones

    if (enfermedad === "Si" && tipoEnfermedad === "") {
      setErrorTE(true);
      return;
    }

    // if (
    //   nombre.trim() === "" ||
    //   nombre.trim() === "" ||
    //   dni.trim() === "" ||
    //   edad.trim() === "" ||
    //   genero === "" ||
    //   maneja === "" ||
    //   lentes === "" ||
    //   diabetico === "" ||
    //   enfermedad === ""
    // ) {
    //   // setError(true);
    //   return;
    // }

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
            onClick={handleSeeUsers}
            colorScheme="yellow"
            w={["60%", "50%", "30%"]}
          >
            + Ver Usuarios
          </Button>
        </Box>

        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={[1, 1, 2]} spacing={4} mx="auto" p="1.5rem">
            <FormControl isRequired>
              <FormLabel> Nombre </FormLabel>
              <Input
                name="nombre"
                type="text"
                id="nombre"
                value={nombre}
                color="black"
                borderColor="black"
                placeholder="Nombre"
                bg="white"
                onChange={actualizarState}
              />
              {errorName && <Text color="yellow"> Campo Requerido </Text>}
            </FormControl>

            <FormControl isRequired mb="1rem">
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
                autoComplete="off"
                onChange={actualizarState}
              />
              {errorApe && <Text color="yellow"> Campo Requerido </Text>}
            </FormControl>

            <FormControl isRequired>
              <FormLabel> Identificacion </FormLabel>
              <Input
                name="dni"
                color="black"
                borderColor="black"
                placeholder="Ingrese DNI sin puntos. Ej: 20123456"
                bg="white"
                type="number"
                id="dni"
                autoComplete="off"
                value={dni}
                onChange={actualizarState}
              />
              {errorDni && <Text color="yellow"> Campo Incorrecto </Text>}
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
              {errorEdad && <Text color="yellow"> Campo Requerido </Text>}
            </FormControl>

            <FormControl mt="1rem" isRequired>
              <FormLabel> Genero </FormLabel>

              <RadioGroup>
                <Stack spacing={5} direction="row">
                  <Radio
                    value="Masculino"
                    name="genero"
                    colorScheme="yellow"
                    onChange={actualizarState}
                  >
                    Masculino
                  </Radio>
                  <Radio
                    value="Femenino"
                    name="genero"
                    colorScheme="yellow"
                    onChange={actualizarState}
                  >
                    Femenino
                  </Radio>
                </Stack>
              </RadioGroup>
              {errorGenero && (
                <Text color="yellow"> Seleccione una opcion </Text>
              )}
            </FormControl>

            <FormControl mt="1rem" isRequired>
              <FormLabel> Maneja ? </FormLabel>

              <RadioGroup>
                <Stack spacing={5} direction="row">
                  <Radio
                    value="Si"
                    name="maneja"
                    colorScheme="yellow"
                    onChange={actualizarState}
                  >
                    Si
                  </Radio>
                  <Radio
                    value="No"
                    name="maneja"
                    colorScheme="yellow"
                    onChange={actualizarState}
                  >
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
              {errorManeja && (
                <Text color="yellow"> Seleccione una opcion </Text>
              )}
            </FormControl>

            <FormControl mt="1rem" isRequired>
              <FormLabel> Usa Lentes ? </FormLabel>

              <RadioGroup>
                <Stack spacing={5} direction="row">
                  <Radio
                    value="Si"
                    name="lentes"
                    colorScheme="yellow"
                    onChange={actualizarState}
                  >
                    Si
                  </Radio>
                  <Radio
                    value="No"
                    name="lentes"
                    colorScheme="yellow"
                    onChange={actualizarState}
                  >
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
              {errorLentes && (
                <Text color="yellow"> Seleccione una opcion </Text>
              )}
            </FormControl>

            <FormControl mt="1rem" isRequired>
              <FormLabel> Es Diabetico ? </FormLabel>

              <RadioGroup>
                <Stack spacing={5} direction="row">
                  <Radio
                    value="Si"
                    name="diabetico"
                    colorScheme="yellow"
                    onChange={actualizarState}
                  >
                    Si
                  </Radio>
                  <Radio
                    value="No"
                    name="diabetico"
                    colorScheme="yellow"
                    onChange={actualizarState}
                  >
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
              {errorDiab && <Text color="yellow"> Seleccione una opcion </Text>}
            </FormControl>

            <FormControl mt="1rem" isRequired>
              <FormLabel> ¿Padece alguna otra enfermedad? </FormLabel>

              <RadioGroup>
                <Stack spacing={5} direction="row">
                  <Radio
                    value="Si"
                    name="enfermedad"
                    colorScheme="yellow"
                    onChange={actualizarState}
                  >
                    Si
                  </Radio>
                  <Radio
                    value="No"
                    name="enfermedad"
                    colorScheme="yellow"
                    onChange={actualizarState}
                  >
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
              {errorEnf && <Text color="yellow"> Seleccione una opcion </Text>}
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
              {errorTE && (
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

import React, { useState, useContext } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Center,
  Button,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import { StoreContext } from "./Context/StoreContext";
import { useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory();

  const { addUser } = useContext(StoreContext);

  const [errorDni, setErrorDni] = useState(false);
  const [errorEdad, setErrorEdad] = useState(false);
  const [errorEnf, setErrorEnf] = useState(false);
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

  const handleChangeDni = () => {
    if (dni.length > 8 || dni.length < 7) {
      setErrorDni(true);
      return;
    } else {
      setErrorDni(false);
      return;
    }
  };

  const handleChangeEdad = () => {
    if (edad > 100 || edad < 18) {
      setErrorEdad(true);
      return;
    } else {
      setErrorEdad(false);
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      nombre.trim() === "" ||
      dni.trim() === "" ||
      dni.length > 8 ||
      dni.length < 7 ||
      edad.trim() === "" ||
      edad > 100 ||
      edad < 18 ||
      genero === "" ||
      maneja === "" ||
      lentes === "" ||
      diabetico === "" ||
      enfermedad === ""
    ) {
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
      <Box
        w={["90%", "80%", "70%"]}
        borderRadius="2rem"
        p="1rem"
        mt="1rem"
        mx="auto"
        color="white"
        bg="teal"
        boxShadow="2xl"
      >
        <Heading
          mb="1rem"
          mt="1rem"
          textAlign="center"
          fontFamily="Mulish"
          fontSize="3rem"
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
                autoComplete="off"
                onChange={actualizarState}
              />
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
                onBlur={handleChangeDni}
              />
              {errorDni && (
                <Text color="red.400">
                  {" "}
                  * Campo invalido: debe contener entre 7 y 8 caracteres{" "}
                </Text>
              )}
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
                onBlur={handleChangeEdad}
              />
              {errorEdad && (
                <Text color="red.400">* Edad Invalida: Rango de 18 a 100 </Text>
              )}
            </FormControl>

            <FormControl mt="1rem" isRequired>
              <FormLabel> Genero </FormLabel>

              <RadioGroup>
                <HStack spacing="2rem">
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
                </HStack>
              </RadioGroup>
            </FormControl>

            <FormControl mt="1rem" isRequired>
              <FormLabel> Maneja ? </FormLabel>

              <RadioGroup>
                <HStack spacing="2rem">
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
                </HStack>
              </RadioGroup>
            </FormControl>

            <FormControl mt="1rem" isRequired>
              <FormLabel> Usa Lentes ? </FormLabel>

              <RadioGroup>
                <HStack spacing="2rem">
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
                </HStack>
              </RadioGroup>
            </FormControl>

            <FormControl mt="1rem" isRequired>
              <FormLabel> Es Diabetico ? </FormLabel>
              <RadioGroup>
                <HStack spacing="2rem">
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
                </HStack>
              </RadioGroup>
            </FormControl>

            <FormControl mt="1rem" isRequired>
              <FormLabel> ¿Padece alguna otra enfermedad? </FormLabel>

              <RadioGroup>
                <HStack spacing="2rem">
                  <Radio
                    value="Si"
                    name="enfermedad"
                    colorScheme="yellow"
                    onChange={actualizarState}
                    onClick={() => {
                      setErrorEnf(true);
                    }}
                  >
                    Si
                  </Radio>
                  <Radio
                    value="No"
                    name="enfermedad"
                    colorScheme="yellow"
                    onChange={actualizarState}
                    onClick={() => {
                      setErrorEnf(false);
                    }}
                  >
                    No
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>

            <FormControl mb="1rem" mt="1rem" isRequired>
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
                autoComplete="off"
                isDisabled={!errorEnf ? true : false}
              />
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

import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Center,
  Button,
  Radio,
  RadioGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { StoreContext } from "./Context/StoreContext";

const EditUserForm = () => {
  const { data, userEdited } = useContext(StoreContext);

  const [errorDni, setErrorDni] = useState(false);
  const [errorEdad, setErrorEdad] = useState(false);

  const [errorTE, setErrorTE] = useState(false);

  const [user, setUser] = useState({});

  const history = useHistory();

  const { cliente } = useParams();

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
  } = user;

  const actualizarState = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleBack = () => {
    history.push("/showusers");
  };

  const findUserById = (cliente) => {
    const userFound = data.find((us) => us.cliente === cliente);
    setUser(userFound);
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

    if (enfermedad === "Si" && tipoEnfermedad === "") {
      setErrorTE(true);
      return;
    }

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

    userEdited(user.cliente, user);

    setTimeout(function () {
      history.push("/showusers");
    }, 1500);
  };

  useEffect(() => {
    findUserById(cliente);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          Formulario de Edicion
        </Heading>

        <Box p="1.5rem" d="flex" justifyContent={["center", "flex-end"]}>
          <Button
            borderRadius="0.5rem"
            onClick={handleBack}
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
                <Text color="yellow">
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
                <Text color="yellow">* Edad Invalida: Rango de 18 a 100 </Text>
              )}
            </FormControl>

            <FormControl mt="1rem" isRequired>
              <FormLabel> Genero </FormLabel>

              <RadioGroup value={genero}>
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

              <RadioGroup value={maneja}>
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

              <RadioGroup value={lentes}>
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
              <RadioGroup value={diabetico}>
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

              <RadioGroup value={enfermedad}>
                <HStack spacing="2rem">
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
                </HStack>
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
              {errorTE && <Text color="yellow">Mencione su enfermedad *</Text>}
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

export default EditUserForm;

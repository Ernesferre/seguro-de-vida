import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Center,
  Button,
  Stack,
  Radio,
  RadioGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { StoreContext } from "./Context/StoreContext";

const EditUserForm = () => {
  const { data, userEdited } = useContext(StoreContext);

  const [client, setClient] = useState({});
  const [user, setUser] = useState(client);
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);

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

  const UpdateUser = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleBack = () => {
    history.push("/showusers");
  };

  const findUserById = (cliente) => {
    const userFound = data.find((us) => us.cliente == cliente);
    setUser(userFound);
  };

  const handleSubmitEdit = (e) => {
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
      setError(true);
      return;
    }

    if (enfermedad === "Si" && tipoEnfermedad === "") {
      setError1(true);
      return;
    }

    userEdited(user.cliente, user);

    setTimeout(function () {
      history.push("/showusers");
    }, 1500);
  };

  useEffect(() => {
    findUserById(cliente);
  }, []);

  return (
    <Box
      objectFit="initial"
      maxWidth={["90%", "70%", "50%"]}
      borderRadius="2rem"
      border="2px"
      borderColor="white"
      mt="2rem"
      mx="auto"
      color="white"
      bg="teal"
      p={3}
    >
      <Heading mb="1rem" mt="1rem" textAlign="center">
        Edicion de Formulario
      </Heading>

      <Button mb="1rem" onClick={handleBack} ml="5rem" colorScheme="teal">
        Ver Usuarios
      </Button>

      <form onSubmit={handleSubmitEdit}>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} w="80%" mx="auto">
          <FormControl mb="1rem" isRequired>
            <FormLabel> Nombre </FormLabel>
            <Input
              color="black"
              borderColor="black"
              bg="white"
              name="nombre"
              type="text"
              id="nombre"
              value={nombre}
              onChange={UpdateUser}
            />
          </FormControl>

          <FormControl mb="1rem" isRequired>
            <FormLabel> Apellido </FormLabel>
            <Input
              color="black"
              borderColor="black"
              bg="white"
              name="apellido"
              type="text"
              id="nombre"
              value={apellido}
              onChange={UpdateUser}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel> Identificacion </FormLabel>
            <Input
              name="dni"
              color="black"
              borderColor="black"
              bg="white"
              type="text"
              id="dni"
              value={dni}
              onChange={UpdateUser}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel> Edad </FormLabel>
            <Input
              name="edad"
              borderColor="black"
              bg="white"
              color="black"
              type="number"
              id="edad"
              value={edad}
              onChange={UpdateUser}
            />
          </FormControl>

          <FormControl mt="1rem" isRequired>
            <FormLabel> Genero </FormLabel>

            <RadioGroup value={genero}>
              <Stack spacing={5} direction="row">
                <Radio value="Masculino" name="genero" onChange={UpdateUser}>
                  Masculino
                </Radio>
                <Radio value="Femenino" name="genero" onChange={UpdateUser}>
                  Femenino
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl mt="1rem" isRequired>
            <FormLabel> Maneja ? </FormLabel>

            <RadioGroup value={maneja}>
              <Stack spacing={5} direction="row">
                <Radio value="Si" name="maneja" onChange={UpdateUser}>
                  Si
                </Radio>
                <Radio value="No" name="maneja" onChange={UpdateUser}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl mt="1rem" isRequired>
            <FormLabel> Usa Lentes ? </FormLabel>

            <RadioGroup value={lentes}>
              <Stack spacing={5} direction="row">
                <Radio value="Si" name="lentes" onChange={UpdateUser}>
                  Si
                </Radio>
                <Radio value="No" name="lentes" onChange={UpdateUser}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl mt="1rem" isRequired>
            <FormLabel> Es Diabetico ? </FormLabel>

            <RadioGroup value={diabetico}>
              <Stack spacing={5} direction="row">
                <Radio value="Si" name="diabetico" onChange={UpdateUser}>
                  Si
                </Radio>
                <Radio value="No" name="diabetico" onChange={UpdateUser}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl mt="1rem" isRequired>
            <FormLabel> ¿Padece alguna otra enfermedad? </FormLabel>

            <RadioGroup value={enfermedad}>
              <Stack spacing={5} direction="row">
                <Radio value="Si" name="enfermedad" onChange={UpdateUser}>
                  Si
                </Radio>
                <Radio value="No" name="enfermedad" onChange={UpdateUser}>
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
              bg="white"
              name="tipoEnfermedad"
              type="text"
              id="nombre"
              value={tipoEnfermedad}
              onChange={UpdateUser}
            />
            {error1 && <Text color="yellow">Indique Enfermedad</Text>}
          </FormControl>
        </SimpleGrid>
        <Center>
          <Button type="submit" colorScheme="teal" mt="3rem" mb="2rem" w="80%">
            Actualizar Datos
          </Button>
        </Center>
      </form>
    </Box>
  );
};

export default EditUserForm;

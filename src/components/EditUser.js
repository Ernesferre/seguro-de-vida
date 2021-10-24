import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Center,
  Button,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { StoreContext } from "./Context/StoreContext";

const EditUser = () => {
  const { data, userEdited } = useContext(StoreContext);

  const [client, setClient] = useState({});
  const [user, setUser] = useState(client);

  const history = useHistory();

  const { cliente } = useParams();

  console.log("Cliente desde EditUser:", cliente);

  //FUNCION QUE ES LLAMADA POR CADA CAMBIO EN UN INPUT
  const UpdateUser = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  //FUNCION PARA VOLVER A PAGINA PPAL
  const handleBack = () => {
    history.push("/showusers");
  };

  // FUNCION QUE BUSCA EN EL ARRAY DATA EL OBJETO SELECCIONADO
  const findUserById = (cliente) => {
    const userFound = data.find((us) => us.cliente == cliente);
    setUser(userFound);
    console.log("Cliente Encontrado", user);
  };

  // EDITAR INFO AL HACER CLICK
  const handleSubmitEdit = (e) => {
    e.preventDefault();

    userEdited(user.cliente, user);

    setTimeout(function () {
      history.push("/showusers");
    }, 1500);
  };

  // CUANDO SE RENDERIZA ESTA PAGINA LLAMA A LA FUNCION DE BUSCAR USUARIO
  useEffect(() => {
    findUserById(cliente);
  }, []);

  console.log("user:", user);

  return (
    <Box>
      <Container
        objectFit="initial"
        maxWidth={["80%", "60%", "45%"]}
        borderRadius="2rem"
        mt="2rem"
        color="white"
        p={3}
      >
        <Heading mb="1rem" textAlign="center">
          Edicion de Formulario
        </Heading>

        <Button onClick={handleBack} mb="2rem">
          Volver
        </Button>

        <VStack p={2}>
          <form onSubmit={handleSubmitEdit}>
            <FormControl mb="1rem">
              <FormLabel> Nombre </FormLabel>
              <Input
                color="black"
                borderColor="black"
                w={["10rem", "15rem", "20rem"]}
                bg="white"
                name="nombre"
                type="text"
                id="nombre"
                value={user.nombre}
                onChange={UpdateUser}
              />
            </FormControl>

            <FormControl mb="1rem">
              <FormLabel> Apellido </FormLabel>
              <Input
                color="black"
                borderColor="black"
                w={["10rem", "15rem", "20rem"]}
                bg="white"
                name="apellido"
                type="text"
                id="nombre"
                value={user.apellido}
                onChange={UpdateUser}
              />
            </FormControl>

            <FormControl>
              <FormLabel> Identificacion </FormLabel>
              <Input
                name="dni"
                color="black"
                borderColor="black"
                w={["10rem", "15rem", "20rem"]}
                bg="white"
                type="text"
                id="dni"
                value={user.dni}
                onChange={UpdateUser}
              />
            </FormControl>
            <FormControl mt="1rem">
              <FormLabel> Edad </FormLabel>
              <Input
                name="edad"
                color="black"
                borderColor="black"
                w={["10rem", "15rem", "20rem"]}
                bg="white"
                type="number"
                value={user.edad}
                onChange={UpdateUser}
              />
            </FormControl>

            <FormControl mt="1rem">
              <FormLabel> Genero </FormLabel>

              <RadioGroup value={user.genero}>
                <Stack spacing={5} direction="row">
                  <Radio name="genero" value="Masculino" onChange={UpdateUser}>
                    Masculino
                  </Radio>
                  <Radio name="genero" value="Femenino" onChange={UpdateUser}>
                    Femenino
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl mt="1rem">
              <FormLabel> Maneja ? </FormLabel>

              <RadioGroup value={user.maneja}>
                <Stack spacing={5} direction="row">
                  <Radio name="maneja" value="Si" onChange={UpdateUser}>
                    Si
                  </Radio>
                  <Radio name="maneja" value="No" onChange={UpdateUser}>
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl mt="1rem">
              <FormLabel> Usa Lentes ? </FormLabel>

              <RadioGroup value={user.lentes}>
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

            <FormControl mt="1rem">
              <FormLabel> Es Diabetico ? </FormLabel>

              <RadioGroup value={user.diabetico}>
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

            <FormControl mt="1rem">
              <FormLabel> ¿Padece alguna otra enfermedad? </FormLabel>

              <RadioGroup value={user.enfermedad}>
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

            <FormControl mb="1rem">
              <FormLabel> En caso positivo indicar cual: </FormLabel>
              <Input
                color="black"
                borderColor="black"
                w={["10rem", "15rem", "20rem"]}
                bg="white"
                name="tipoEnfermedad"
                type="text"
                id="nombre"
                value={user.tipoEnfermedad}
                onChange={UpdateUser}
              />
            </FormControl>

            <Center>
              <Button type="submit" colorScheme="teal" mt="3rem">
                Actualizar
              </Button>
            </Center>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default EditUser;

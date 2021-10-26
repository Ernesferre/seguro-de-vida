import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { StoreContext } from "./Context/StoreContext";
import { useHistory } from "react-router-dom";
import List from "./List";

const ShowUsers = () => {
  const history = useHistory();

  const { data } = useContext(StoreContext);

  const handleBack = () => {
    history.push("/");
  };

  return (
    <Box w="90%" mx="auto">
      <Heading
        mt="2rem"
        mb="3rem"
        textAlign="center"
        fontFamily="Mulish"
        fontSize="3rem"
      >
        Registro de Usuarios
      </Heading>

      <Box d="flex" justifyContent={"space-between"}>
        <Button onClick={handleBack} mb="2rem" colorScheme="yellow">
          + Crear nuevo usuario
        </Button>
      </Box>

      {/* Encabezado */}
      <Box
        mx="auto"
        bg="teal"
        color="white"
        boxShadow="2xl"
        borderRadius="1rem"
      >
        <SimpleGrid
          px="1rem"
          columns={11}
          fontWeight="bold"
          display={{ base: "none", md: "grid" }}
          justifyItems="center"
          textDecoration="bold"
        >
          <HStack h="60px">
            <Text>Nombre</Text>
          </HStack>

          <HStack h="60px">
            <Text>Apellido</Text>
          </HStack>

          <HStack h="60px">
            <Text>Dni</Text>
          </HStack>

          <HStack h="60px">
            <Text>Edad</Text>
          </HStack>

          <HStack h="60px">
            <Text>Genero</Text>
          </HStack>

          <HStack h="60px">
            <Text>Maneja</Text>
          </HStack>

          <HStack h="60px">
            <Text>Lentes</Text>
          </HStack>

          <HStack h="60px">
            <Text>Diabetico</Text>
          </HStack>

          <HStack h="60px">
            <Text>Enferm</Text>
          </HStack>

          <HStack h="60px">
            <Text>Cual</Text>
          </HStack>

          <HStack h="60px">
            <Text>Accion</Text>
          </HStack>
        </SimpleGrid>

        {data.length > 0 ? (
          data.map((us) => <List key={us.cliente} {...us} />)
        ) : (
          <Heading
            textAlign="center"
            mt="1rem"
            p="1rem"
            color="yellow.400"
            fontFamily="Mulish"
          >
            Registro Vacio
          </Heading>
        )}
      </Box>
    </Box>
  );
};

export default ShowUsers;

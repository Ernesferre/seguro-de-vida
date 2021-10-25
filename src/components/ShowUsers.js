import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "./Context/StoreContext";
import { useHistory } from "react-router-dom";
import List from "./List";

const ShowUsers = () => {
  const history = useHistory();

  const { data } = useContext(StoreContext);

  const handleBack = () => {
    history.push("/");
  };

  // useEffect(() => {
  //   const usuario = (localStorage.getItem("usuarios"));
  //   console.log(usuario);
  // }, []);

  return (
    <Box w={["95%", "90%", "60%"]} mx="auto">
      <Heading
        orientation="horizontal"
        marginTop="8"
        textAlign="center"
        marginBottom="5"
        fontFamily="Mulish"
        fontSize="3.5rem"
      >
        Registro de Usuarios
      </Heading>

      <Box d="flex" justifyContent={["center", "flex-end"]}>
        <Button onClick={handleBack} mb="2rem" colorScheme="yellow">
          + Crear nuevo usuario
        </Button>
      </Box>

      {/* Encabezado */}
      <Box
        mx="auto"
        bg="teal"
        color="white"
        borderColor="teal"
        border="5px"
        boxShadow="lg"
        borderRadius="1rem"
      >
        <SimpleGrid
          px={4}
          columns={6}
          fontWeight="bold"
          spacingY="10px"
          spacingX="10px"
          bg="bgGray.100"
          display={{ base: "none", md: "grid" }}
          borderRadius="4px"
          justifyItems="center"
          textDecoration="bold"
        >
          <HStack height="60px">
            <Text>Nombre</Text>
          </HStack>

          <HStack height="60px">
            <Text>Apellido</Text>
          </HStack>

          <HStack height="60px">
            <Text>DNI</Text>
          </HStack>

          <HStack height="60px">
            <Text>Edad</Text>
          </HStack>

          <HStack height="60px">
            <Text>Genero</Text>
          </HStack>

          <HStack height="60px">
            <Text>Accion</Text>
          </HStack>
        </SimpleGrid>

        {data.length > 0 ? (
          data.map((us) => <List key={us.cliente} {...us} />)
        ) : (
          <Heading textAlign="center" mt="1rem" p="1rem">
            Registro Vacio
          </Heading>
        )}
      </Box>
    </Box>
  );
};

export default ShowUsers;

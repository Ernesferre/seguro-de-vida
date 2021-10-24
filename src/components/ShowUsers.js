import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  HStack,
  Text,
  Container,
  CircularProgress,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "./Context/StoreContext";
import { useHistory } from "react-router-dom";
import List from "./List";

const ShowUsers = () => {
  const history = useHistory();

  const { data } = useContext(StoreContext);

  console.log("Desde ShowUsers: ", data);

  const handleBack = () => {
    history.push("/");
  };

  // useEffect(() => {
  //   const usuario = (localStorage.getItem("usuarios"));
  //   console.log(usuario);
  // }, []);

  return (
    <Box w="60%" mx="auto">
      <Heading
        orientation="horizontal"
        marginTop="8"
        textAlign="center"
        marginBottom="5"
      >
        Registro de Usuarios
      </Heading>
      <Button onClick={handleBack} mb="2rem">
        + Crear usuario
      </Button>

      {/* Encabezado */}
      <Box
        w="100%"
        m="auto"
        bg="rgba(0, 0, 0, 0.02)"
        boxShadow="lg"
        borderRadius="4px"
      >
        <SimpleGrid
          px={4}
          columns={6}
          fontWeight="bold"
          spacingY="10px"
          spacingX="10px"
          border="1px"
          borderColor="gray.200"
          bg="bgGray.100"
          display={{ base: "none", md: "grid" }}
          borderRadius="4px"
          justifyItems="center"
          textDecoration="bold"
        >
          {/* <HStack height="60px">
            <Text fontSize="14px">Cliente</Text>
          </HStack> */}

          <HStack height="60px">
            <Text fontSize="14px">Nombre</Text>
          </HStack>

          <HStack height="60px">
            <Text fontSize="14px">Apellido</Text>
          </HStack>

          <HStack height="60px">
            <Text fontSize="14px">DNI</Text>
          </HStack>

          <HStack height="60px">
            <Text fontSize="14px">Edad</Text>
          </HStack>

          <HStack height="60px">
            <Text fontSize="14px">Genero</Text>
          </HStack>

          <HStack height="60px">
            <Text fontSize="14px">Accion</Text>
          </HStack>
        </SimpleGrid>

        {data.length > 0 ? (
          data.map((us) => <List key={us.id} {...us} />)
        ) : (
          <Heading textAlign="center" marginTop={4} marginBottom={4}>
            Registro Vacio
          </Heading>
        )}
      </Box>
    </Box>
  );
};

export default ShowUsers;

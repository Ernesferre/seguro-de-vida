import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  HStack,
  Text,
  Box,
  SimpleGrid,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { StoreContext } from "./Context/StoreContext";

const ListShow = (props) => {
  const { deleteUser } = useContext(StoreContext);

  const {
    cliente,
    apellido,
    nombre,
    dni,
    edad,
    genero,
    maneja,
    lentes,
    diabetico,
    enfermedad,
    tipoEnfermedad,
  } = props;

  return (
    <>
      {/* Mobile */}

      <VStack
        d={{ base: "grid", md: "none" }}
        columns={1}
        position="relative"
        ml="3rem"
        mr="3rem"
        p={1}
        bg="teal"
      >
        <Text
          mt="1rem"
          textAlign="center"
          fontSize="1.8rem"
          fontFamily="Mulish"
          color="yellow.400"
        >
          {" "}
          <b>
            {nombre} {apellido}
          </b>
        </Text>

        <Text>
          {" "}
          <b>Dni:</b> {dni}
        </Text>
        <Text>
          {" "}
          <b>Edad:</b> {edad}{" "}
        </Text>
        <Text>
          {" "}
          <b>Genero: </b>
          {genero}{" "}
        </Text>
        <Text>
          {" "}
          <b>Maneja: </b>
          {maneja}{" "}
        </Text>
        <Text>
          {" "}
          <b>Usa Lentes: </b>
          {lentes}{" "}
        </Text>
        <Text>
          {" "}
          <b>Es Diabetico: </b>
          {diabetico}{" "}
        </Text>
        <Text>
          {" "}
          <b>Tiene Enfermedad: </b>
          {enfermedad}{" "}
        </Text>
        <Text>
          {" "}
          <b>Cual: </b>
          {tipoEnfermedad}{" "}
        </Text>
        <HStack h="5rem" justifyContent="space-around">
          <Text
            className="btn my-center"
            fontSize="1.5rem"
            cursor="pointer"
            onClick={() => {
              deleteUser(cliente);
            }}
          >
            {" "}
            <FaTrash />
          </Text>
          <Link to={`./edit/${cliente}`}>
            <Text className="btn" cursor="pointer" fontSize="1.5rem">
              {" "}
              <FaEdit />
            </Text>
          </Link>
        </HStack>
        <hr></hr>
      </VStack>

      {/* Desktop */}

      <SimpleGrid
        bg="white"
        color="black"
        border="1px"
        borderColor="gray.100"
        columns={6}
        spacingY="10px"
        spacingX="10px"
        justifyItems="center"
        p={4}
        d={{ base: "none", md: "grid" }}
      >
        <HStack height="60px">
          <Box>
            <Text fontSize="14px">{nombre}</Text>
          </Box>
        </HStack>

        <HStack height="60px">
          <Box>
            <Text fontSize="14px">{apellido}</Text>
          </Box>
        </HStack>

        <HStack height="60px">
          <Box>
            <Text fontSize="14px">{dni}</Text>
          </Box>
        </HStack>

        <HStack height="60px">
          <Box>
            <Text fontSize="14px">{edad}</Text>
          </Box>
        </HStack>

        <HStack height="60px">
          <Box>
            <Text fontSize="14px">{genero}</Text>
          </Box>
        </HStack>

        <HStack height="60px">
          <Text
            className="btn my-center"
            cursor="pointer"
            onClick={() => {
              deleteUser(cliente);
            }}
          >
            {" "}
            <FaTrash />
          </Text>
          <Spacer></Spacer>
          <Link to={`./edit/${cliente}`}>
            <Text className="btn" cursor="pointer">
              {" "}
              <FaEdit />
            </Text>
          </Link>
        </HStack>
      </SimpleGrid>
    </>
  );
};

export default ListShow;

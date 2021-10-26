import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { HStack, Text, SimpleGrid, Spacer, VStack } from "@chakra-ui/react";
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
        ml="3rem"
        mr="3rem"
        bg="teal"
      >
        <Text
          mt="1rem"
          mb="1rem"
          textAlign="center"
          fontSize="2rem"
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
      </VStack>

      {/* Desktop */}

      <SimpleGrid
        bg="white"
        color="black"
        border="2px"
        borderColor="gray.100"
        columns={11}
        spacingX="10px"
        justifyItems="center"
        alignItems="center"
        fontSize="0.9rem"
        p={4}
        d={{ base: "none", md: "grid" }}
      >
        <Text>{nombre}</Text>
        <Text>{apellido}</Text>
        <Text>{dni}</Text>
        <Text>{edad}</Text>
        <Text>{genero}</Text>
        <Text>{maneja}</Text>
        <Text>{lentes}</Text>
        <Text>{diabetico}</Text>
        <Text>{enfermedad}</Text>
        <Text>{tipoEnfermedad}</Text>

        <HStack>
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

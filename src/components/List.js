import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { HStack, Text, Box, SimpleGrid, Spacer } from "@chakra-ui/react";
import { StoreContext } from "./Context/StoreContext";
import { useHistory } from "react-router-dom";

const ListShow = (props) => {
  // const history = useHistory();

  const { deleteUser } = useContext(StoreContext);

  console.log(props);

  const { cliente, apellido, nombre, dni, edad, genero } = props;

  console.log("nombre:", nombre);

  return (
    <>
      {/* Mobile */}

      {/* <Box 
            bg="#fff" 
            w="100%" 
            h="auto" 
            d={{base: "flex", md: "none"}} 
            direction="row" 
            justifyContent="space-between" 
            px="16px" 
            py="8px" 
            border="1px" 
            borderColor="gray.200"
        >

            <Stack 
                d="flex" 
                direction={{base: "column", md: "row"}} 
                justifyContent={{base: "center", md: "space-around"}}
            >

                <Heading fontFamily="title" fontSize={{base: "14px"}}  >
                    {proj}
                </Heading>

                <Text fontSize={{base: "10px"}} color="gray.500" style={{'margin-top': "0px"}}>
                    Creation date: {date}
                </Text>

                <Stack 
                    d="flex" 
                    direction="row">

                    <Avatar src="https://bit.ly/kent-c-dodds" w="25px" h="25px" />

                    <Text fontSize={{base: "12px"}}>{assigned}</Text>

                </Stack>
            </Stack>

            <Stack>
                    <span 
                        className="btn my-center" 
                        onClick={() => {deleteProject(id)}}
                        
                        > <FaTrash />
                    </span>
                                    
                    <Link to={`./edit/${ proj }`}>
                        <span
                            className="btn"
                            onClick={() => {editRow(props)}}
                            
                            > <FaEdit />
                        </span>
                    </Link>
            </Stack>
        </Box> */}

      {/* Desktop */}
      <SimpleGrid
        bg="#fff"
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
        {/* <HStack height="60px">
          <Box>
            <Text fontSize="14px">{cliente}</Text>
          </Box>
        </HStack> */}

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
            <Text
              className="btn"
              cursor="pointer"
              //   onClick={() => {editRow(props)}}
            >
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

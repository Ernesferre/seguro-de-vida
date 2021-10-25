import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Center,
  Button,
  Stack,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import { useField, ErrorMessage } from "formik";

const TextField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("field: ", field);
  // console.log("props:", props);
  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Input
          isInvalid={meta.touched && meta.error}
          type={type}
          autoComplete="off"
          {...field}
          {...props}
        />
        <Box color="red" fontSize="0.8rem">
          <ErrorMessage name={field.name} />
        </Box>
      </FormControl>
    </Box>
  );
};

export default TextField;

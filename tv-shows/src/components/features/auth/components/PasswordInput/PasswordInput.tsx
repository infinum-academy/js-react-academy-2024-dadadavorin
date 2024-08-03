import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface IPasswordInputProps {
  register: any;
  errors: any;
  fieldName: string;
  props?: object;
}

export const PasswordInput = ({
  register,
  errors,
  fieldName,
  props,
}: IPasswordInputProps) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={!!errors[fieldName]}>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input
          {...register(fieldName, props)}
          type={show ? "text" : "password"}
          bg="white.100"
          color="black"
          name={fieldName}
        />
        <InputRightElement width="4.5rem">
          {show ? (
            <ViewOffIcon
              onClick={handleClick}
              color="purple.300"
              cursor="pointer"
            />
          ) : (
            <ViewIcon
              onClick={handleClick}
              color="purple.300"
              cursor="pointer"
            />
          )}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{errors[fieldName]?.message}</FormErrorMessage>
    </FormControl>
  );
};

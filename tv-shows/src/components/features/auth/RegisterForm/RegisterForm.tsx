"use client";
import {
  Alert,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  chakra,
  Image,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import { authUser } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import NextLink from "next/link";
import { PasswordInput } from "../components/PasswordInput/PasswordInput";
import { EmailIcon } from "@chakra-ui/icons";

interface IRegisterFormInputs {
  email: string;
  password: string;
  password_confirmation: string;
}

export const RegisterForm = () => {
  const [registered, setRegistered] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegisterFormInputs>();
  const { trigger } = useSWRMutation(swrKeys.users, authUser, {
    onSuccess: () => {
      setRegistered(true);
    },
  });
  const onRegister = (data: IRegisterFormInputs) => {
    trigger(data);
  };

  const password = watch("password", "");

  return (
    <Flex
      direction="column"
      gap={3}
      alignItems="center"
      color="white.100"
      bg="purple.300"
      padding="14"
      borderRadius={{ base: "0", md: "default" }}
      maxW="500px"
      width="100%"
      flexGrow="1"
    >
      {registered && (
        <Flex direction="column" alignItems="center">
          <Alert status="success" marginBottom="5">
            You have been successfully registered! Please proceed to login.
          </Alert>
          <Button as={NextLink} href="/login" colorScheme="yellow" size="lg">
            Go to login
          </Button>
        </Flex>
      )}
      {!registered && (
        <Flex
          direction="column"
          gap={3}
          alignItems="center"
          color="white"
          width="100%"
        >
          <Image
            src="images/logo.svg"
            alt="logo"
            width="200px"
            maxW="100%"
            marginBottom="14"
          />
          <chakra.form
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={7}
            onSubmit={handleSubmit(onRegister)}
          >
            <FormControl isInvalid={!!errors.email}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <EmailIcon
                    color="white"
                    marginLeft="4"
                    fontSize="18"
                    marginTop="3"
                  />
                </InputLeftElement>
                <Input
                  {...register("email", { required: true })}
                  type="email"
                  variant="outline"
                  borderRadius="lg"
                  placeholder="Email"
                />
              </InputGroup>
              <FormErrorMessage>Email is required</FormErrorMessage>
            </FormControl>
            <PasswordInput
              register={register}
              errors={errors}
              fieldName="password"
              props={{
                required: "You must specify a password",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              }}
            />

            <PasswordInput
              register={register}
              errors={errors}
              fieldName="password_confirmation"
              props={{
                validate: (value: string) =>
                  value === password || "The passwords do not match",
              }}
            />

            <Button
              type="submit"
              variant="solid"
              colorScheme="white"
              size="md"
              marginTop="5"
            >
              Sign up
            </Button>
          </chakra.form>
          <Box mt="10" color="white" textAlign="center">
            Already have an account?{" "}
            <Button
              as={NextLink}
              href="/login"
              colorScheme="white"
              fontWeight="bold"
              variant="link"
            >
              Login
            </Button>
          </Box>
        </Flex>
      )}
    </Flex>
  );
};

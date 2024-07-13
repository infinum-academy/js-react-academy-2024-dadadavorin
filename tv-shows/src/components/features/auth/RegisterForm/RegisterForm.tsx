"use client";
import {
  Alert,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  chakra,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import NextLink from "next/link";

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
  const { trigger } = useSWRMutation(swrKeys.users, mutator, {
    onSuccess: () => {
      setRegistered(true);
    },
  });
  const onRegister = (data: IRegisterFormInputs) => {
    trigger(data);
  };

  const password = watch("password", "");

  return (
    <>
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
        <Flex direction="column" gap={3} alignItems="center" color="white.100">
          <Heading as="h2">Register</Heading>
          <Text marginBottom="5">
            Please enter your desired email and password to register:
          </Text>
          <chakra.form
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={3}
            onSubmit={handleSubmit(onRegister)}
          >
            <FormControl isRequired={true} isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                {...register("email", { required: "Email is required" })}
                name="email"
                type="email"
                bg="white.100"
                color="black"
              />
              {errors.email && (
                <Text color="red.500">{errors.email.message}</Text>
              )}
            </FormControl>
            <FormControl isRequired={true} isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                {...register("password", {
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
                name="password"
                type="password"
                bg="white.100"
                color="black"
              />
              {errors.password && (
                <Text color="red.500">{errors.password.message}</Text>
              )}
            </FormControl>
            <FormControl
              isRequired={true}
              isInvalid={!!errors.password_confirmation}
            >
              <FormLabel>Confirm Password</FormLabel>
              <Input
                {...register("password_confirmation", {
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
                name="password_confirmation"
                type="password"
                bg="white.100"
                color="black"
              />
              {errors.password_confirmation && (
                <Text color="red.500">
                  {errors.password_confirmation.message}
                </Text>
              )}
            </FormControl>
            <Button type="submit" colorScheme="yellow" marginTop="5" size="lg">
              Register
            </Button>
          </chakra.form>
        </Flex>
      )}
    </>
  );
};

"use client";
import {
  Alert,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  chakra,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import { authUser } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import NextLink from "next/link";
import { PasswordInput } from "../components/PasswordInput/PasswordInput";

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
        <Flex direction="column" gap={3} alignItems="center" color="white">
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
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                {...register("email", { required: true })}
                name="email"
                type="email"
                bg="white"
                color="black"
              />
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
              colorScheme="purple"
              variant="solid"
              marginTop="5"
              size="lg"
            >
              Register
            </Button>
          </chakra.form>
        </Flex>
      )}
    </>
  );
};

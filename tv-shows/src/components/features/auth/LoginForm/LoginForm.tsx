"use client";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  chakra,
  Text,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { authUser } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { useSWRConfig } from "swr";
import NextLink from "next/link";
import { PasswordInput } from "../components/PasswordInput/PasswordInput";

interface ILoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>();
  const { mutate } = useSWRConfig();
  const { trigger } = useSWRMutation(swrKeys.signIn, authUser, {
    onSuccess: (data) => {
      mutate(swrKeys.me, data, false);
    },
  });

  const onLogin = (data: ILoginFormInputs) => {
    trigger(data);
  };

  return (
    <Flex direction="column" gap={3} alignItems="center" color="white.100">
      <Heading as="h2">Login</Heading>
      <Text>Please login using your credentials</Text>
      <chakra.form
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        onSubmit={handleSubmit(onLogin)}
      >
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            {...register("email", { required: true })}
            type="email"
            bg="white.100"
            color="black"
          />
          <FormErrorMessage>Email is required</FormErrorMessage>
        </FormControl>
        <PasswordInput
          register={register}
          errors={errors}
          fieldName="password"
          props={{
            required: "Password is required",
          }}
        />
        <Button
          type="submit"
          variant="solid"
          colorScheme="purple"
          size="lg"
          marginTop="5"
        >
          Login
        </Button>
      </chakra.form>
      <Box mt="10">
        <Text>
          Don&apos;t have an account?{" "}
          <Button
            as={NextLink}
            href="/register"
            variant="link"
            colorScheme="purpleLight"
          >
            Register
          </Button>
        </Text>
      </Box>
    </Flex>
  );
};

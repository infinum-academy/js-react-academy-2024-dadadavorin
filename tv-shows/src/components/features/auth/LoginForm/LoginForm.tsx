"use client";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  chakra,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWR from "swr";
import { fetcher } from "@/fetchers/fetcher";

interface ILoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<ILoginFormInputs>();
  const { mutate } = useSWR(swrKeys.me, fetcher);
  const { trigger } = useSWRMutation(swrKeys.sign_in, mutator, {
    onSuccess: (data) => {
      mutate(data, { revalidate: false });
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
        <FormControl isRequired={true}>
          <FormLabel>Email</FormLabel>
          <Input
            {...register("email")}
            required
            type="email"
            bg="white.100"
            color="black"
          ></Input>
        </FormControl>
        <FormControl isRequired={true}>
          <FormLabel>Password</FormLabel>
          <Input
            {...register("password")}
            type="password"
            required
            bg="white.100"
            color="black"
          ></Input>
        </FormControl>
        <Button type="submit" colorScheme="yellow" size="lg" marginTop="5">
          Login
        </Button>
      </chakra.form>
    </Flex>
  );
};

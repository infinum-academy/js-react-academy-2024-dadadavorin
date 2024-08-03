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
  InputGroup,
  InputLeftElement,
  Image,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { authUser } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { useSWRConfig } from "swr";
import NextLink from "next/link";
import { PasswordInput } from "../components/PasswordInput/PasswordInput";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

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
        gap={3}
        onSubmit={handleSubmit(onLogin)}
      >
        <FormControl isInvalid={!!errors.email}>
          <InputGroup marginBottom="5">
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
            required: "Password is required",
          }}
        />
        <Button
          type="submit"
          variant="solid"
          colorScheme="white"
          size="md"
          marginTop="10"
        >
          Log in
        </Button>
      </chakra.form>
      <Box mt="10">
        <Text>
          Don&apos;t have an account?{" "}
          <Button
            as={NextLink}
            href="/register"
            variant="link"
            colorScheme="white"
            fontWeight="bold"
          >
            Register
          </Button>
        </Text>
      </Box>
    </Flex>
  );
};

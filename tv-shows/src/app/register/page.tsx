"use client";
import { Box, Button, Container } from "@chakra-ui/react";
import { RegisterForm } from "@/components/features/auth/RegisterForm/RegisterForm";
import NextLink from "next/link";

export default function RegisterPage() {
  return (
    <>
      <Box bg="gray.200" paddingBlock="10" height="80vh">
        <Container>
          <RegisterForm />
          <Box mt="10" color="white.100" textAlign="center">
            Already have an account?{" "}
            <Button
              as={NextLink}
              href="/login"
              colorScheme="yellow"
              variant="link"
            >
              Login
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

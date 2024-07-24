"use client";
import { Box, Button, Container } from "@chakra-ui/react";
import { RegisterForm } from "@/components/features/auth/RegisterForm/RegisterForm";
import NextLink from "next/link";

export default function RegisterPage() {
  return (
    <>
      <Box bg="purple.500" paddingBlock="10" minHeight="100vh">
        <Container>
          <RegisterForm />
          <Box mt="10" color="white" textAlign="center">
            Already have an account?{" "}
            <Button
              as={NextLink}
              href="/login"
              colorScheme="purpleLight"
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

"use client";
import { Box, Container } from "@chakra-ui/react";
import { RegisterForm } from "@/components/features/auth/RegisterForm/RegisterForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function RegisterPage() {
  return (
    <>
      <AuthRedirect to="/login" condition="loggedOut" />
      <Box bg="gray.200" paddingBlock="10" height="80vh">
        <Container>
          <RegisterForm />
        </Container>
      </Box>
    </>
  );
}

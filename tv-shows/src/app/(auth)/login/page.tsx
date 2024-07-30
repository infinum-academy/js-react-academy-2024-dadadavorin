import { Box, Container } from "@chakra-ui/react";
import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function LoginPage() {
  return (
    <>
      <AuthRedirect to="/all-shows" condition="loggedIn" />
      <LoginForm />
    </>
  );
}

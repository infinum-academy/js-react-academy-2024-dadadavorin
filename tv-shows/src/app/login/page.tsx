import { Box, Container } from "@chakra-ui/react";
import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";

export default function RegisterPage() {
  return (
    <Box bg="gray.200" paddingBlock="10" height="80vh">
      <Container>
        <LoginForm />
      </Container>
    </Box>
  );
}

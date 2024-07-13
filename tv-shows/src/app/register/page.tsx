import { Box, Container } from "@chakra-ui/react";
import { RegisterForm } from "@/components/features/auth/RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <Box bg="gray.200" paddingBlock="10" height="80vh">
      <Container>
        <RegisterForm />
      </Container>
    </Box>
  );
}

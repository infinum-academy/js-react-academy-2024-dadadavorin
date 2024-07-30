"use client";
import { Box, Button, Container } from "@chakra-ui/react";
import { RegisterForm } from "@/components/features/auth/RegisterForm/RegisterForm";
import NextLink from "next/link";

export default function RegisterPage() {
  return (
    <>
      <RegisterForm />
    </>
  );
}

"use client";
import { Box, Heading } from "@chakra-ui/react";
import { ShowsListAll } from "@/components/features/shows/ShowsList/ShowsListAll";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function AllShowsPage() {
  return (
    <>
      <AuthRedirect to="/login" condition="loggedOut" />
      <Box paddingBlock="10" paddingInline="10" backgroundColor="gray.200">
        <Heading as="h1" size="xl" marginBottom="10" color="white.100">
          All shows
        </Heading>
        <ShowsListAll />
      </Box>
    </>
  );
}

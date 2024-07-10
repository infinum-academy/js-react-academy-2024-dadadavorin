"use client";

import { Box, Heading } from "@chakra-ui/react";
import { ShowsList } from "@/components/features/shows/ShowsList";

export default function AllShowsPage() {
  return (
    <Box paddingBlock="10" paddingInline="10" backgroundColor="gray.200">
      <Heading as="h1" size="xl" marginBottom="10" color="white.100">
        All shows
      </Heading>
      <ShowsList />
    </Box>
  );
}
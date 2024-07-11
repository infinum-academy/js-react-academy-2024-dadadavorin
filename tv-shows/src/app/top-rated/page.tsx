"use client";

import { Box, Heading } from "@chakra-ui/react";
import { ShowsList } from "@/components/features/shows/ShowsList";

export default function TopRatedPage() {
  return (
    <Box paddingBlock="10" paddingInline="10" backgroundColor="gray.200">
      <Heading as="h1" size="xl" marginBottom="10" color="white.100">
        Top rated
      </Heading>
      <ShowsList apiRoute="/api/shows/top-rated/" />
    </Box>
  );
}

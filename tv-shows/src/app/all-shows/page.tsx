"use client";

import { Box } from "@chakra-ui/react";
import { ShowsList } from "@/components/features/shows/ShowsList";

export default function AllShowsPage() {
  return (
    <Box paddingBlock="10" paddingInline="10" backgroundColor="gray.200">
      <ShowsList />
    </Box>
  );
}

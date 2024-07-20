"use client";

import { Box, Heading } from "@chakra-ui/react";
import { ShowsListTopRated } from "@/components/features/shows/ShowsList/ShowsListTopRated/ShowsListTopRated";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function TopRatedPage() {
  return (
    <>
      <AuthRedirect to="/login" condition="loggedOut" />
      <Box paddingBlock="10" paddingInline="10">
        <ShowsListTopRated />
      </Box>
    </>
  );
}

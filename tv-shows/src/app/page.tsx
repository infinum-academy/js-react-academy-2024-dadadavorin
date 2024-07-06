"use client";

import { Heading, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box display="flex" justifyContent="center">
      <Box padding={10} backgroundColor="black" maxWidth="960px" flexGrow="1">
        <Heading display="flex" justifyContent="center" color="white">
          TV Shows
        </Heading>
      </Box>
    </Box>
  );
}

import { Grid } from "@chakra-ui/react";
import { ShowCard } from "./ShowCard";

export const ShowsList = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap="5"
    >
      <ShowCard />
      <ShowCard />
      <ShowCard />
      <ShowCard />
    </Grid>
  );
};

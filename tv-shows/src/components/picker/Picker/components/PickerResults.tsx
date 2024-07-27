import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";
import { Flex, Grid, Heading } from "@chakra-ui/react";
import { ShowCard } from "@/components/features/shows/ShowCard/ShowCard";
import { IShow } from "@/typings/Show.type";

export const PickerResults = () => {
  const { selectedShows } = useContext(PickerContext);

  return (
    <>
      <Heading fontSize="2xl" marginBottom="10" textAlign="center">
        You picked:
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
        }}
        gap="5"
      >
        {selectedShows.map((show: IShow) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </Grid>
    </>
  );
};
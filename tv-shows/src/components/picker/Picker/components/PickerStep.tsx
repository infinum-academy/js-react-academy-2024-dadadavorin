import useSWR from "swr";
import { PickerContext } from "./PickerContextProvider";
import { useContext } from "react";

import { Box, Grid, Text } from "@chakra-ui/react";
import { IShow } from "@/typings/Show.type";
import { ShowCard } from "@/components/features/shows/ShowCard/ShowCard";

export const PickerStep = () => {
  const { currentStep, showLists, selectedShows, setSelectedShows } =
    useContext(PickerContext);

  if (!showLists) {
    return null;
  }

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
        }}
        gap="5"
      >
        {showLists.shows.map((show: IShow) => {
          const isSelected = selectedShows.find((t) => t === show);

          return (
            <Box
              bg={isSelected ? "green.500" : "gray.100"}
              padding="2"
              borderRadius="default"
              key={show.id}
              onClick={
                isSelected
                  ? () => {
                      setSelectedShows(selectedShows.filter((t) => t !== show));
                    }
                  : () => {
                      setSelectedShows([...selectedShows, show]);
                    }
              }
              cursor="pointer"
            >
              <ShowCard key={show.id} show={show} disableLink />
            </Box>
          );
        })}
      </Grid>
    </>
  );
};

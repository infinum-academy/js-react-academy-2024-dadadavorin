import { Grid, Spinner } from "@chakra-ui/react";
import { ShowCard } from "../ShowCard/ShowCard";
import { getShowList } from "@/fetchers/shows";
import useSWR from "swr";

interface ShowsListProps {
  apiRoute: string;
}

export const ShowsList = ({ apiRoute }: ShowsListProps) => {
  const {
    data: showListResponse,
    error,
    isLoading,
  } = useSWR(apiRoute, getShowList);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Ups something went wrong...</div>;
  }

  const showLists = showListResponse?.shows;

  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap="5"
    >
      {showLists?.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </Grid>
  );
};

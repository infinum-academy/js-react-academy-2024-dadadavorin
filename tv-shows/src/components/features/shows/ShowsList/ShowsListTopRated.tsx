import { Spinner } from "@chakra-ui/react";
import { getShowListTopRated } from "@/fetchers/shows";
import { ShowsList } from "./ShowsList";
import { IShowList } from "@/typings/Show.type";
import useSWR from "swr";

export const ShowsListTopRated = () => {
  const {
    data: showListResponse,
    error,
    isLoading,
  } = useSWR("/top-rated/", getShowListTopRated);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Ups something went wrong...</div>;
  }

  const showLists: IShowList = { shows: showListResponse?.shows ?? [] };

  return <ShowsList showLists={showLists} />;
};

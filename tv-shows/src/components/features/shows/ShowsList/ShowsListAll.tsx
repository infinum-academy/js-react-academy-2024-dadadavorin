import { Spinner } from "@chakra-ui/react";
import { ShowsList } from "./ShowsList";
import { getShowList } from "@/fetchers/shows";
import { IShowList } from "@/typings/Show.type";
import useSWR from "swr";

export const ShowsListAll = () => {
  const {
    data: showListResponse,
    error,
    isLoading,
  } = useSWR("/all-shows/", getShowList);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Ups something went wrong...</div>;
  }

  const showLists: IShowList = { shows: showListResponse?.shows ?? [] };

  return <ShowsList showLists={showLists} />;
};

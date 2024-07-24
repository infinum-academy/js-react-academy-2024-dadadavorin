import { Spinner } from "@chakra-ui/react";
import { ShowsList } from "../ShowsList/ShowsList";
import { IShowList } from "@/typings/Show.type";
import useSWR from "swr";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";

export const ShowsListAll = () => {
  const {
    data: showListResponse,
    error,
    isLoading,
  } = useSWR(swrKeys.shows, fetcher<IShowList>);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Ups something went wrong...</div>;
  }

  const showLists: IShowList = { shows: showListResponse?.shows ?? [] };

  return <ShowsList showLists={showLists} />;
};

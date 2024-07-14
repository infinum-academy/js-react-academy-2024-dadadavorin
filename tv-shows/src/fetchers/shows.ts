import { IShow } from "@/typings/Show.type";
import { fetcher } from "./fetcher";
import { swrKeys } from "./swrKeys";

interface IShowListResponse {
  shows: Array<IShow>;
}

export function getShowList() {
  return fetcher<IShowListResponse>(swrKeys.shows);
}

export function getShowListTopRated() {
  return fetcher<IShowListResponse>(swrKeys.top_rated);
}

export function getShowItem(id: string) {
  return fetcher<IShow>(`${swrKeys.shows}/${id}`);
}

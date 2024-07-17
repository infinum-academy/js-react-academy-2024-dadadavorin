import { IShow, IGetShowListParams } from "@/typings/Show.type";
import { fetcher } from "./fetcher";

interface IShowListResponse {
  shows: Array<IShow>;
}

export function getShowList() {
  return fetcher<IShowListResponse>("/api/shows/");
}

export function getShowListTopRated() {
  return fetcher<IShowListResponse>("/api/shows/top-rated/");
}

export function getShowItem(id: string) {
  return fetcher<IShow>(`/api/shows/${id}`);
}

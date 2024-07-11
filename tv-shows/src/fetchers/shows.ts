import { IShow, IGetShowListParams } from "@/typings/Show.type";
import { fetcher } from "./fetcher";

interface IShowListResponse {
  shows: Array<IShow>;
}

export function getShowList(apiRoute: string) {
  return fetcher<IShowListResponse>(apiRoute);
}

export function getShowItem(id: string) {
  return fetcher<IShow>(`/api/shows/${id}`);
}

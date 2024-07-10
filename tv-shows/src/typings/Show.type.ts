export interface IShow {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  average_rating?: number;
  no_of_reviews: number;
}

export interface IShowList {
  shows: Array<IShow>;
}

export interface IGetShowListParams {
  apiRoute: string;
}

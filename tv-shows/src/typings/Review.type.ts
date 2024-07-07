export interface IReview {
  title: string;
  comment: string;
  rating: number;
}

export interface IReviewList {
  reviews: Array<IReview>;
}

export interface IReviewRating {
  reviewRating: number;
}

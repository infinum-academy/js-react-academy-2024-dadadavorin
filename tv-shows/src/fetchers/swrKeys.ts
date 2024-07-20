const apiUrl = "https://tv-shows.infinum.academy";
export const swrKeys = {
  users: `${apiUrl}/users`,
  signIn: `${apiUrl}/users/sign_in`,
  me: `${apiUrl}/users/me`,
  shows: `${apiUrl}/shows`,
  topRated: `${apiUrl}/shows/top_rated`,
  reviews: `${apiUrl}/reviews`,
  reviewList: (id: string) => `${apiUrl}/shows/${id}/reviews`,
  showItem: (id: string) => `${apiUrl}/shows/${id}`,
  reviewItem: (id: string) => `${apiUrl}/reviews/${id}`,
};

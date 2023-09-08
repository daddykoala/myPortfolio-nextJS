import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  username: 'daddykoala',
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com",
    prepareHeaders: (headers, { getState }) => {
      // Supposons que votre jeton d'accès GitHub est stocké dans `getState().auth.token`.
      const token = process.env.token;
      if (token) {
        headers.set('Authorization', `token ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (username) => `users/${username}`,
    }),
    getUserRepos: builder.query({
      query: (username) => `users/${username}/repos`,
    }),
    getUserFollowers: builder.query({
      query: (username) => `users/${username}/followers`,
    }),
    getUserFollowing: builder.query({
      query: (username) => `users/${username}/following`,
    }),
    getUserStarred: builder.query({
      query: (username) => `users/${username}/starred`,
    }),
    getUserPublicEvents: builder.query({
      query: (username) => `users/${username}/events/public`,
    }),
  })
});

export const {
  useGetUserProfileQuery, 
  useGetUserReposQuery,
  useGetUserFollowersQuery,
  useGetUserFollowingQuery,
  useGetUserStarredQuery,
  useGetUserPublicEventsQuery
} = githubApi;

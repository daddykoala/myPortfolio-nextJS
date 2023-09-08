import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  // username: 'daddykoala',
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com",
    prepareHeaders: (headers, { getState }) => {
      const token = process.env.token;
      if (token) {
        headers.set('Authorization', `token ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({

    getUserProfile: builder.query({
      query: () => `users/daddykoala`,
    }),

    getUserRepos: builder.query({
      query: () => `users/daddykoala/repos`,
    }),

    getUserRepoCommits: builder.query({
      query: ({ repo }) => `repos/daddykoala/${repo}/commits`,
    }),

    getUserStarred: builder.query({
      query: () => `users/daddykoala/starred`,
    }),

    getUserPublicEvents: builder.query({
      query: (username) => `users/${username}/events/public`,
    }),
  })
});

export const {
 useGetUserProfileQuery,useGetUserPublicEventsQuery, useGetUserReposQuery,useGetUserRepoCommitsQuery
} = githubApi;

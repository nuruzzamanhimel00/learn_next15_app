"use client";
import { api } from "./api";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      providesTags: ["Users"],
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["Users"],
    }),
    showUsers: builder.query({
      query: ({id}) => `users/${id}`,
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation, useShowUsersQuery } = usersApi;

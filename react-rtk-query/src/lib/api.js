"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://68c213fef9928dbf33ed4d58.mockapi.io/api/v1/" }),
  tagTypes: ["Users"],
  endpoints: () => ({}), // will inject later
});

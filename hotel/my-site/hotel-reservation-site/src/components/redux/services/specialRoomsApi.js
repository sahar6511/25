import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const specialRoomsApi = createApi({
  reducerPath: "specialRoomsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),

  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "specialRooms",
      providesTags: ["specialRooms"],
    }),
  }),
});

export const { useGetSpecialRoomsQuery } = specialRoomsApi;

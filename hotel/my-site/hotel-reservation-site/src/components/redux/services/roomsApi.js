import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),

  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "rooms",
      providesTags: ["rooms"],
    }),

    getSpecialRooms: builder.query({
      query: () => "specialRooms",
      providesTags: ["specialRooms"],
    }),

  }),
});

export const { useGetRoomsQuery,useGetSpecialRoomsQuery } = roomsApi;

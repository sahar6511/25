import { configureStore } from "@reduxjs/toolkit";


import { roomsApi } from "./services/roomsApi";
// import { specialRoomsApi } from "./services/specialRoomsApi";

const customStore = configureStore({
  reducer: {

    [roomsApi.reducerPath]:roomsApi.reducer,
    // [specialRoomsApi.reducerPath]:specialRoomsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
     
      .concat(roomsApi.middleware)
      // .concat(specialRoomsApi.middleware)
});

export default customStore;

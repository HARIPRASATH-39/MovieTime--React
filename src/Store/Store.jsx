import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "../Slices/WatchlistSlice";

const store = configureStore({
  reducer: {
    watchlistinfo: watchlistReducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlist: [],
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    setWatchlist: (state, action) => {
      state.watchlist = [...state.watchlist, action.payload];
    },
    deleteWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (movie, index) => index !== action.payload
      );
    },
  },
});

export const { setWatchlist, deleteWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;

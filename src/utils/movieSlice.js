import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: {},
    trailerVideo: {},
    isSearchMovies: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    searchMoviesClick: (state, action) => {
      state.isSearchMovies = !state.isSearchMovies;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, searchMoviesClick } =
  movieSlice.actions;
export default movieSlice.reducer;

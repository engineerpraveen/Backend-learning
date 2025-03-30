import { createSlice } from "@reduxjs/toolkit";

const loaderReducer = createSlice({
  name: "loader",

  initialState: {
    loading: false,
  },

  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { showLoading, hideLoading } = loaderReducer.actions;
export default loaderReducer.reducer;

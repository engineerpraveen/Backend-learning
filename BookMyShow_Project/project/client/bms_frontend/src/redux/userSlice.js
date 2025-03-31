import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
  },
});
export const { setUser } = user.actions;
export default user.reducer;

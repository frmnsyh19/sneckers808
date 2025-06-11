import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: [],
};

const SizeReducer = createSlice({
  name: "SizeSlice",
  initialState,
  reducers: {
    SetSize: (state, action) => {
      state.size = action.payload.size;
    },
  },
});

export const { SetSize } = SizeReducer.actions;
export const SizeSlice = SizeReducer.reducer;

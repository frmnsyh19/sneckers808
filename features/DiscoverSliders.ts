import { createSlice } from "@reduxjs/toolkit";

type dataDiscover = {
  query: string;
  search: string;
  category: string;
};

const Initialstate: dataDiscover = {
  query: "",
  search: "",
  category: "",
};

const DiscoverSliders = createSlice({
  name: "DiscoverSliders",
  initialState: Initialstate,
  reducers: {
    addSetDiscoverProduct: (state, action) => {
      state.query = action.payload.query;
      state.search = action.payload.search;
      state.category = action.payload.category;
    },
  },
});

export const { addSetDiscoverProduct } = DiscoverSliders.actions;
export const DiscoverSlidersReducer = DiscoverSliders.reducer;

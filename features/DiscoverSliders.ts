import { createSlice } from "@reduxjs/toolkit";

type dataDiscover = {
  query: string;
  search: string;
  sort: string;
  category: string;
};

const Initialstate: dataDiscover = {
  query: "",
  search: "",
  category: "",
  sort: "",
};

const DiscoverSliders = createSlice({
  name: "DiscoverSliders",
  initialState: Initialstate,
  reducers: {
    addSetDiscoverProduct: (state, action) => {
      const { query, search, category, sort } = action.payload;

      if (query !== undefined) state.query = query;
      if (search !== undefined) state.search = search;
      if (category !== undefined) state.category = category;
      if (sort !== undefined) state.sort = sort;
    },
  },
});

export const { addSetDiscoverProduct } = DiscoverSliders.actions;
export const DiscoverSlidersReducer = DiscoverSliders.reducer;

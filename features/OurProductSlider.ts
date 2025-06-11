import { createSlice } from "@reduxjs/toolkit";

type initialstateType = {
  size: string;
  qty: number;
};

const initialState: initialstateType = {
  size: "",
  qty: 0,
};

const OurProductSlice = createSlice({
  name: "OurProduct",
  initialState,
  reducers: {
    addOurProductState: (state, actions) => {
      state.qty = actions.payload.qty;
      state.size = actions.payload.size;
    },
  },
});

export const { addOurProductState } = OurProductSlice.actions;
export const OurProduct = OurProductSlice.reducer;

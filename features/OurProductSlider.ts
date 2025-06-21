import { createSlice } from "@reduxjs/toolkit";

type initialstateType = {
  size: string;
  qty: number;
};

const initialState: initialstateType = {
  size: "",
  qty: 1,
};

const OurProductSlice = createSlice({
  name: "OurProduct",
  initialState,
  reducers: {
    addOurProductState: (state, actions) => {
      if (!actions.payload.qty) {
        state.qty = 1;
      } else {
        state.qty = actions.payload.qty;
      }
      state.size = actions.payload.size;
    },
  },
});

export const { addOurProductState } = OurProductSlice.actions;
export const OurProduct = OurProductSlice.reducer;

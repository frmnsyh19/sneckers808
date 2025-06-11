import { createSlice } from "@reduxjs/toolkit";

type CartServiceProps = {
  totalproduct: number;
  totalprice: number;
};

const initialState: CartServiceProps = {
  totalproduct: 0,
  totalprice: 0,
};

const CartRedux = createSlice({
  name: "CartRedux",
  initialState,
  reducers: {
    addSetCart: (state, action) => {
      if (action.payload.totalproduct) {
        state.totalproduct = action.payload.totalproduct;
      }
      if (action.payload.totalprice) {
        state.totalprice = action.payload.totalprice;
      }
    },
  },
});

export const { addSetCart } = CartRedux.actions;
export const CartReducer = CartRedux.reducer;

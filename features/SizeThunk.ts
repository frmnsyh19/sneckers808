// redux/features/sizeSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface SizeItem {
  stok: number;
  size: string;
}

type sizeState = {
  size: SizeItem[];
  loading: boolean;
  error: null | string;
};

// AsyncThunk
export const fetchsize = createAsyncThunk<
  SizeItem[], // return type dari async function
  { productid: string } // payload yang dikirim ke thunk
>("sizeThunk", async ({ productid }) => {
  const res = await axios.get(`/api/product/size?productid=${productid}`);
  return res.data.datas as SizeItem[];
});

const initialState: sizeState = {
  size: [],
  loading: false,
  error: null,
};

// Slice
const sizeSlice = createSlice({
  name: "SizeApiThunk",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchsize.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchsize.fulfilled, (state, action) => {
        state.loading = false;
        state.size = action.payload;
      })
      .addCase(fetchsize.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

// ✅ Ganti nama export agar tidak bentrok
export const sizeReducer = sizeSlice.reducer;

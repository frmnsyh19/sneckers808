import { DiscoverSlidersReducer } from "@/features/DiscoverSliders";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { OurProduct } from "../features/OurProductSlider";
import { sizeReducer } from "@/features/SizeThunk";
import { SizeSlice } from "@/features/SizeReducer";
import { CartReducer } from "@/features/CartRedux";

export const store = configureStore({
  reducer: {
    discover: DiscoverSlidersReducer,
    ourproduct: OurProduct,
    sizeReducer: sizeReducer,
    SizeSlice: SizeSlice,
    CartReducer: CartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Hooks to use throughout the app
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

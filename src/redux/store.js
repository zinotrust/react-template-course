import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../redux/features/data/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataUsingThunk = createAsyncThunk(
  "fetch/storeItems",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

interface storeSliceType {
  products: any;
  loading: boolean;
  error: string | undefined;
}

const initialState: storeSliceType = {
  products: [],
  loading: false,
  error: undefined,
};

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
    updateProducts: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataUsingThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDataUsingThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchDataUsingThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateProducts } = storeSlice.actions;
export default storeSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};
export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});
export const getCategoryProducts = createAsyncThunk(
  "getCategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);
export const getDetail = createAsyncThunk("getDetailProducts", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
});
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // sayfaya yüklenme durumu pending
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADİNG;
      })
      // tamamlandı dururmu fullFieldk
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCES;
        state.products = action.payload;
      })

      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
        state.products = action.payload;
      })

      //! detaylar sayfası start
      .addCase(getDetail.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADİNG;
      })
      // tamamlandı dururmu fullFieldk
      .addCase(getDetail.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCES;
        state.productDetail = action.payload;
      })

      .addCase(getDetail.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
        state.productDetail = action.payload;
      })
      //!category baslat
      .addCase(getCategoryProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADİNG;
      })
      // tamamlandı dururmu fullFieldk
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCES;
        state.products = action.payload;
      })

      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      });
  },
});
export default productSlice.reducer;

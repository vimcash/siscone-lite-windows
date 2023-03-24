import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../interfaces";
import addDBProduct from "../service/addDBProduct";

export const useAddDBProduct = createAsyncThunk(
  'service/addDBProduct',
  async (inProduct:Product) => {
    const product = await addDBProduct(inProduct)
    return product
  }
)
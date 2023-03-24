import { createAsyncThunk } from "@reduxjs/toolkit";
import getDBProduct from "../service/getDBProduct";

export const useGetDBProduct = createAsyncThunk(
  'service/getDBProduct',
  async () => {
    const product = await getDBProduct()
    return product
  }
)
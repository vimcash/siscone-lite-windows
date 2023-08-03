import { createAsyncThunk } from "@reduxjs/toolkit";
import addDBCategory from "../service/addDBCategory";

export const useAddDBCategory = createAsyncThunk(
  'service/addDBCategory',
  async ({categoryName}:any) => await addDBCategory(categoryName)
)
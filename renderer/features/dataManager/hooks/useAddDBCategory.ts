import { createAsyncThunk } from "@reduxjs/toolkit";
import addDBCategory from "../service/addDBCategory";

export const useAddDBCategory = createAsyncThunk(
  'service/addDBCategory',
  async ({categoryName}:any) => {
    const category = await addDBCategory(categoryName)
    return category
  }
)
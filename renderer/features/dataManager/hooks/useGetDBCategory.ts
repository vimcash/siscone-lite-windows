import { createAsyncThunk } from "@reduxjs/toolkit";
import getDBCategory from "../service/getDBCategory";

export const useGetDBCategory = createAsyncThunk(
  'service/getDBCategory',
  async () => await getDBCategory()
)
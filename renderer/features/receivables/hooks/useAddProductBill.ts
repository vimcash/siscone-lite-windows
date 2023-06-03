import { createAsyncThunk } from "@reduxjs/toolkit";
import addDBProductBill from "../service/addDBProductBill";

export const useAddProductBill= createAsyncThunk(
  'service/addDBProductBill',
  async (inProductBill:any) => await addDBProductBill(inProductBill)
)
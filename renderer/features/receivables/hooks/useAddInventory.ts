import { createAsyncThunk } from "@reduxjs/toolkit";
import addDBInventory from "../service/addDBInventory";

export const useAddInventory= createAsyncThunk(
  'service/addDBInventory',
  async (inInventory:any) => await addDBInventory(inInventory)
)
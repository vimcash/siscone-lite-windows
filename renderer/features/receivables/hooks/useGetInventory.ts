import { createAsyncThunk } from "@reduxjs/toolkit"
import getDBInventory from "../service/getDBInventory"

export const useGetInventory = createAsyncThunk(
  'service/getDBInventory',
  async () => await getDBInventory()
)
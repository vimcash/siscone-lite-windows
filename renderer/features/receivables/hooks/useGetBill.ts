import { createAsyncThunk } from "@reduxjs/toolkit"
import getDBBill from "../service/getDBBill"

export const useGetBill = createAsyncThunk(
  'service/getDBBill',
  async (inBillID:number) => await getDBBill(inBillID)
)
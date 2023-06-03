import { createAsyncThunk } from "@reduxjs/toolkit"
import getDBBills from "../service/getDBBills"

export const useGetBills = createAsyncThunk(
  'service/getDBBills',
  async () => await getDBBills()
)
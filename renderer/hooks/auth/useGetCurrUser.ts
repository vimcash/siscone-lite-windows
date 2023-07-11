import { createAsyncThunk } from "@reduxjs/toolkit";
import getCurrUser from "../../service/auth/getCurrUser";

export const useGetCurrUser = createAsyncThunk(
  'service/getCurrUser',
  async () => {
    const resp = await getCurrUser()
    return resp.data
  }
)
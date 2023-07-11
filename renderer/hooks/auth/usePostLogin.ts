import { createAsyncThunk } from "@reduxjs/toolkit";
import postAPILogin from "../../service/auth/postAPILogin";

export const usePostLogin = createAsyncThunk(
  'service/postAPILogin',
  async (inUser:any) => {
    const resp = await postAPILogin(inUser)
    return resp.data
  }
)
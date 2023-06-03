import { createAsyncThunk } from "@reduxjs/toolkit";
import getDBClient from "../service/getDBClient";

export const useGetDBClient = createAsyncThunk(
  'service/getDBClient',
  async () => {
    const clients = await getDBClient()
    return clients
  }
)
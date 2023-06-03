import { createAsyncThunk } from "@reduxjs/toolkit";
import addDBClient from "../service/addDBClient";
import { Client } from "../interfaces";

export const useAddDBClient = createAsyncThunk(
  'service/addDBClient',
  async (inClient:Client) => {
    const client = await addDBClient(inClient)
    return client
  }
)
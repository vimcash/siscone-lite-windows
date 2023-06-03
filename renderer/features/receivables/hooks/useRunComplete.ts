import { createAsyncThunk } from "@reduxjs/toolkit";
import runDBCompleteBill from "../service/runDBCompleteBill";

export const useRunComplete = createAsyncThunk(
  'service/runDBCompleteBill',
  async (inState:any) => await runDBCompleteBill(inState)
)
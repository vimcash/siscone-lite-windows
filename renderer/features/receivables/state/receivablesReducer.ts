import { combineReducers } from "@reduxjs/toolkit";
import { AppState } from "../../../data/store/types";
import { inventoryReducer } from "./inventoryState/inventoryState";

export const selectReceivables = (state:AppState) => state.receivables

export const receivablesReducer = combineReducers({
  inventory: inventoryReducer
})
import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./Category/categoryState";

export const dataManagerReducer = combineReducers({
  category: categoryReducer
})
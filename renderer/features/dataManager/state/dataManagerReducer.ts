import { combineReducers } from "@reduxjs/toolkit";
import { AppState } from "../../../data/store/types";
import { categoryReducer } from "./Category/categoryState";
import { productReducer } from "./Product/productState";

export const selectDataManager = (state:AppState) => ({...state.dataManager, product: {...state.dataManager.product, categoryID: state.dataManager.category.categoryID}})
export const dataManagerReducer = combineReducers({
  category: categoryReducer,
  product: productReducer
})
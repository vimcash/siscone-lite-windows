import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../../../../data/store/types"
import actions from "./actions"

export const initialState = {
  type: 'none',
  itemList: null,
  listFilter: null,
  title: '',
  input1: ''
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: actions
})

export const selectPopup = (state:AppState) => state.popup
export const { hidePopup, showAddCategory, setInput1 } = popupSlice.actions
export const popupReducer = popupSlice.reducer
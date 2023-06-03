import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../../../../data/store/types"
import actions from "./actions"
import { Popup } from "../../../../interfaces"

export const initialState:Popup = {
  type: 'none',
  itemList: null,
  listFilter: null,
  title: '',
  check1: false,
  input1: '',
  input2: '',
  input3: '',
  input4: '',
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: actions
})

export const selectPopup = (state:AppState) => state.popup
export const { hidePopup, showAddCategory, showAddClient, showCompleteBill, setInput1, setInput2, setInput3, setInput4, setCheckBox } = popupSlice.actions
export const popupReducer = popupSlice.reducer
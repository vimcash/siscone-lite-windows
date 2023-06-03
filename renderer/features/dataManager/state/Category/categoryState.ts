import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { AppState } from "../../../../data/store/types"
import { getColumnByIndex } from "../../../../utils"
import { useAddDBCategory, useGetDBCategory } from "../../hooks"
import actions from "./actions"

const initialState = {
  itemList: null,
  listFilter: null,
  status: 'unload',
  categoryID: ''
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: actions,
  extraReducers(builder) {
    builder
      .addCase(useAddDBCategory.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(useAddDBCategory.rejected, (state) => {
        state.status = 'rejected'
        toast.success('Ups! Algo salio mal');
      })
      .addCase(useAddDBCategory.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.status = 'idle'
        state.categoryID = getColumnByIndex(payload.created, 0)
        const formatedList = payload.list.map(category => ({id: getColumnByIndex(category, 0), displayName: getColumnByIndex(category, 1)}))
        state.itemList = formatedList
        state.listFilter = formatedList
        toast.success('Categoria creada Exitosamente');
      })
      .addCase(useGetDBCategory.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(useGetDBCategory.rejected, (state) => {
        state.status = 'rejected'
        toast.success('Ups! Algo salio mal');
      })
      .addCase(useGetDBCategory.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.status = 'idle'
        const formatedList = payload.map(category => ({id: getColumnByIndex(category, 0), displayName: getColumnByIndex(category, 1)}))
        state.categoryID = formatedList[0] ? formatedList[0].id : ''
        state.itemList = formatedList
        state.listFilter = formatedList
      })
  },
})
export const { setCategoryID, setCleanCategoryID } = categorySlice.actions
export const selectCategory = (state:AppState) => state.dataManager.category
export const categoryReducer = categorySlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { AppState } from "../../../../data/store/types"
import { useAddDBProduct, useGetDBProduct } from "../../hooks"
import { Product } from "../../interfaces"
import actions from "./actions"
import { getColumnByIndex } from "../../../../utils"

const initialState:Product = {
  code: '',
  titles: ['Productos', 'Categoria', 'Codigo'],
  name: '',
  itemList: null,
  filterList: null,
  status: 'unload'
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: actions,
  extraReducers(builder) {
    builder
      .addCase(useAddDBProduct.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(useAddDBProduct.rejected, (state) => {
        state.status = 'rejected'
        toast.success('Ups! Algo salio mal');
      })
      .addCase(useAddDBProduct.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.status = 'idle'
        state.code = ''
        state.name = ''
        const formatedList = payload.map(product => ({...product, id: getColumnByIndex(product, 3), displayName: getColumnByIndex(product, 0)}))
        state.itemList = formatedList
        state.filterList = formatedList
        toast.success('Producto creado Exitosamente');
      })
      .addCase(useGetDBProduct.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(useGetDBProduct.rejected, (state) => {
        state.status = 'rejected'
        toast.success('Ups! Algo salio mal');
      })
      .addCase(useGetDBProduct.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.status = 'idle'
        const formatedList = payload.map(product => ({...product, id: getColumnByIndex(product, 3), displayName: getColumnByIndex(product, 0)}))
        state.itemList = formatedList
        state.filterList = formatedList
      })
  },
})

export const { setProductName, setCode, setClean } = productSlice.actions
export const productReducer = productSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { formatForComboBox, getColumnByIndex } from "../../../../utils"
import { useGetDBProduct } from "../../../dataManager/hooks"
import { useAddInventory } from "../../hooks/useAddInventory"
import { useGetInventory } from "../../hooks/useGetInventory"
import { Inventory } from "../../interfaces/Inventory"
import actions from "./actions"

const initialState:Inventory = {
  titles: ["Producto", "Categoria", "Cantidad"],
  itemList: null,
  filterList: null,
  search: "",
  productList: null,
  productID: "",
  qty: 0,
  status: 'idle'
}

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: actions,
  extraReducers(builder) {
    builder
      .addCase(useGetDBProduct.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(useGetDBProduct.rejected, (state) => {
        state.status = 'rejected'
        toast.success('Ups! Algo salio mal');
      })
      .addCase(useGetDBProduct.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.status = 'idle'
        const formatedList = formatForComboBox(payload, 0, 3)
        state.productList = formatedList
      })
      .addCase(useAddInventory.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(useAddInventory.rejected, (state) => {
        state.status = 'rejected'
        toast.error('Ups! Algo salio mal')
      })
      .addCase(useAddInventory.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.status = 'idle'
        state.itemList = payload.list
        state.filterList = payload.list
        state.productID = ""
        state.qty = 0
        toast.success('Success')
      })
      .addCase(useGetInventory.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(useGetInventory.rejected, (state) => {
        state.status = 'rejected'
        toast.error('Ups! Algo salio mal')
      })
      .addCase(useGetInventory.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.status = 'idle'
        state.itemList = payload
        state.filterList = payload
      })
  }
})

export const { setProductID, setQty, setClean } = inventorySlice.actions
export const inventoryReducer = inventorySlice.reducer
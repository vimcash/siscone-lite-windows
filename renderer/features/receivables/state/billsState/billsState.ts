import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { useAddDBClient } from "../../../dataManager/hooks"
import { getColumnByIndex } from "../../../../utils"
import { useAddProductBill, useGetBills } from "../../hooks"
import { toast } from "react-toastify"
import { useGetBill } from "../../hooks/useGetBill"
import { useRunComplete } from "../../hooks/useRunComplete"

const initialState = {
  searchBill: '',
  itemList: null,
  filterList: null,
  billsList: null,
  billsFilter: null,
  clientID: '',
  productID: '',
  qty: 0,
  billID: '',
  selectedBillID: '',
  qtyDisp: 0,
  billNumber: '',
  goBack: false
}

const billsSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: actions,
  extraReducers(builder) {
    builder
      .addCase(useAddDBClient.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.clientID = getColumnByIndex(payload.created, 0)
      })
      .addCase(useAddProductBill.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.billID = getColumnByIndex(payload.created, 0)
        state.billNumber = getColumnByIndex(payload.created, 1)
        state.itemList = payload.list
        state.filterList = payload.list
        state.productID = ''
        state.qty = 0
        state.qtyDisp = 0
      })
      .addCase(useGetBill.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.itemList = payload.list
        state.filterList = payload.list
        state.billID = getColumnByIndex(payload.created, 0)
        state.clientID = getColumnByIndex(payload.created, 1)
      })
      .addCase(useGetBills.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.billsList = payload
        state.billsFilter = payload
      })
      .addCase(useRunComplete.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.billsList = payload.list
        state.billsFilter = payload.list
        toast.success('Factura completada!')
        state.goBack = true
      })
  },
})

export const { setClientID, setProduct, setQty, setSelectedBillID, setSearchBill, fullClean, resetGoBack } = billsSlice.actions
export const billsReducer = billsSlice.reducer
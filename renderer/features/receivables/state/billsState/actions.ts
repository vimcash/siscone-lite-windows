import { PayloadAction } from "@reduxjs/toolkit";

const actions = {
  setClientID: (state, {payload}:PayloadAction<number>) => {
    state.clientID = payload
  },
  setProduct: (state, {payload}:PayloadAction<any>) => {
    state.productID = payload ? payload.id : ''
    state.qtyDisp = payload ? payload.QTY : 0
    state.qty = 0
  },
  setQty: (state, {payload}:PayloadAction<number>) => {
    if(payload <= state.qtyDisp)
      state.qty = payload
    if(payload < 0)
      state.qty = 0
  },
  fullClean: (state) => {
    state.itemList = null,
    state.filterList = null,
    state.billsList = null,
    state.billsFilter = null,
    state.clientID = '',
    state.productID = '',
    state.qty = 0,
    state.billID = '',
    state.qtyDisp = 0,
    state.billNumber = '',
    state.selectedBillID = ''
  },
  setSelectedBillID: (state, {payload}:PayloadAction<number>) => {
    state.selectedBillID = state.selectedBillID != payload ? payload : "" 
  }
}

export default actions
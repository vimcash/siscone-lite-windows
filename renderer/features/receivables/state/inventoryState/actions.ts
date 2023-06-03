import { PayloadAction } from "@reduxjs/toolkit"

const actions = {
  setProductID: (state, {payload}:PayloadAction<number>) => {
    state.productID = payload
  },
  setQty: (state, {payload}:PayloadAction<number>) => {
    payload >= 0 ?
      state.qty = payload :
      state.qty = 0
  },
  setClean: (state) => {
    state.productID = ""
    state.qty = 0
  }
}

export default actions
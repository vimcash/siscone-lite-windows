import { PayloadAction } from "@reduxjs/toolkit"
import { getColumnByIndex as columByIndex } from '../../../../utils'

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
  },
  setSearchInventory: (state, {payload}:PayloadAction<string>) => {
    if(payload == undefined)
      return
    state.search = payload
    state.filterList = 
      payload.trim() == "" ? 
        state.itemList : 
        state.itemList.filter(item => 
          columByIndex(item, 0).toLowerCase().indexOf(payload.toLowerCase()) > -1 ||
          columByIndex(item, 1).toLowerCase().indexOf(payload.toLowerCase()) > -1 
        )
  },
  setSelectedItem: (state, {payload}:PayloadAction<string>) => {
    console.log(payload == state.selectedItem ? "" : payload)
    state.selectedItem = payload == state.selectedItem ? "" : payload
  }
}

export default actions
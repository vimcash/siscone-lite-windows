import { PayloadAction } from "@reduxjs/toolkit";
import { getColumnByIndex as columByIndex } from '../../../../utils'

const actions = {
  setProductName: (state:any, {payload}:PayloadAction<string>) => {
    state.name = payload
  },
  setCode: (state:any, {payload}:PayloadAction<string>) => {
    state.code = payload
  },
  setClean: (state:any) => {
    state.name = ''
    state.code = ''
  },
  setSearchProduct: (state:any, {payload}:PayloadAction<string>) => {
    state.productFilter = payload
    state.filterList = 
      payload.trim() == "" ? 
        state.itemList : 
        state.itemList.filter(product => 
          columByIndex(product, 0).toLowerCase().indexOf(payload.toLowerCase()) > -1 ||
          columByIndex(product, 1).toLowerCase().indexOf(payload.toLowerCase()) > -1 ||
          columByIndex(product, 2)?.toLowerCase().indexOf(payload.toLowerCase()) > -1 
        )
  }
}

export default actions;
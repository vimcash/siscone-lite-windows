import { PayloadAction } from "@reduxjs/toolkit"
const actions = {
  setInput1: (state:any, {payload}:PayloadAction<string>) => {
    state.input1 = payload
  },
  showAddCategory: (state:any) => {
    state.type = 'addCategory'
    state.input1 = ''
  },
  hidePopup: (state:any) => {
    state.type = 'none'
    state.itemList = null
    state.listFilter = null
    state.title = ''
    state.input1 = ''
  }
}

export default actions
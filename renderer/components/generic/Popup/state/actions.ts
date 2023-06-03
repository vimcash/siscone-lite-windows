import { PayloadAction } from "@reduxjs/toolkit"
const actions = {
  setInput1: (state:any, {payload}:PayloadAction<string>) => {
    state.input1 = payload
  },
  setInput2: (state:any, {payload}:PayloadAction<string>) => {
    state.input2 = payload
  },
  setInput3: (state:any, {payload}:PayloadAction<string>) => {
    state.input3 = payload
  },
  setInput4: (state:any, {payload}:PayloadAction<string>) => {
    state.input4 = payload
  },
  showAddCategory: (state:any) => {
    state.type = 'addCategory'
  },
  showCompleteBill: (state:any) => {
    state.type = 'completeBill'
  },
  showAddClient: (state:any) => {
    state.type = 'addClient'
  },
  hidePopup: (state:any) => {
    state.type = 'none'
    state.itemList = null
    state.listFilter = null
    state.title = ''
    state.input1 = ''
    state.input2 = ''
    state.input3 = ''
    state.input4 = ''
    state.check1 = false
  },
  setCheckBox: (state:any) => {
    state.check1 = !state.check1
    state.input1 = ''
    state.input2 = ''
    state.input3 = ''
    state.input4 = ''
  }
}

export default actions
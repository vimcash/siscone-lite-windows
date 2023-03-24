import { PayloadAction } from "@reduxjs/toolkit";

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
  }
}

export default actions;
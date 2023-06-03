import { PayloadAction } from "@reduxjs/toolkit";

const actions = {
  setClientID: (state:any, {payload}:PayloadAction<number>) => {
    state.clientID = payload
  },
  setCleanClientID: (state:any) => {
    state.clientID = ''
  }
}

export default actions
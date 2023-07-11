import { PayloadAction } from "@reduxjs/toolkit";

const actions = {
  setUsername: (state, {payload}:PayloadAction<string>) => {
    console.log(payload)
    state.username = payload
  },
  setPassword: (state, {payload}:PayloadAction<string>) => {
    state.password = payload
  },
}

export default actions
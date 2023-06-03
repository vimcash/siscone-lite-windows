import { PayloadAction } from "@reduxjs/toolkit"
import { setDelay, setLocalStorage } from "../../utils"

const actions = {
  setCurrPage: (state, {payload}: PayloadAction<string>) => {
    state.currPage = payload
  }
}

export default actions
import { PayloadAction } from "@reduxjs/toolkit";

const actions = {
  setCategoryID: (state:any, {payload}:PayloadAction<number>) => {
    state.categoryID = payload
  },
  setCleanCategoryID: (state:any) => {
    state.categoryID = ''
  }
}

export default actions
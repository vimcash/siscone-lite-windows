import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../../data/store/types"
import actions from "./actions"

const pjson = require('../../../package.json');
const initialState = {
  currPage: 'home',
  appTitle: 'Menu',
  version: pjson.version,
  dbHost: '127.0.0.1',
  adminPass: '52401'
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: actions,
  extraReducers(builder) {
    builder
  },
})

export const selectCurrPage = (state: AppState) => state.global.currPage
export const selectAdminPass = (state: AppState) => state.global.currPage
export const selectVersion = (state: AppState) => state.global.version
export const selectFirstRun = (state: AppState) => state.global.firstRun
export const selectDbHost = (state: AppState) => state.global.dbHost
export const selectGlobal = (state: AppState) => state.global
export const selectEntireState = (state: AppState) => state

export const { setCurrPage } = globalSlice.actions

export default globalSlice.reducer
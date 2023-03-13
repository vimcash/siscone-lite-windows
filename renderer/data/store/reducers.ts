import { combineReducers } from "@reduxjs/toolkit"
import globalReducer from "../../states/globalState"
const reducers = combineReducers({
  global: globalReducer,
})

export default reducers
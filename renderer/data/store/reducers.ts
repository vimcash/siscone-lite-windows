import { combineReducers } from "@reduxjs/toolkit"
import { popupReducer } from "../../components/generic/Popup/state"
import { dataManagerReducer } from "../../features/dataManager/state/dataManagerReducer"
import globalReducer from "../../states/globalState"
import { authReducer } from "../../features/auth"
const reducers = combineReducers({
  global: globalReducer,
  dataManager: dataManagerReducer,
  popup: popupReducer,
  auth: authReducer
})

export default reducers
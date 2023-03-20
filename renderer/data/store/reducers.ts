import { combineReducers } from "@reduxjs/toolkit"
import { popupReducer } from "../../components/generic/Popup/state"
import { dataManagerReducer } from "../../features/dataManager/state/dataManagerReducer"
import globalReducer from "../../states/globalState"
const reducers = combineReducers({
  global: globalReducer,
  dataManager: dataManagerReducer,
  popup: popupReducer
})

export default reducers
import { combineReducers } from "@reduxjs/toolkit"
import { popupReducer } from "../../components/generic/Popup/state"
import { dataManagerReducer } from "../../features/dataManager/state/dataManagerReducer"
import { receivablesReducer } from "../../features/receivables/state/receivablesReducer"
import globalReducer from "../../states/globalState"
import { billsReducer } from "../../features/receivables/state/billsState/billsState"

const reducers = combineReducers({
  global: globalReducer,
  dataManager: dataManagerReducer,
  popup: popupReducer,
  receivables: receivablesReducer,
  bills: billsReducer
})

export default reducers
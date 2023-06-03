import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { AppState } from "../../../../data/store/types"
import { getColumnByIndex } from "../../../../utils"
import { useAddDBClient, useGetDBClient } from "../../hooks"
import actions from "./actions"
import { Client } from "../../interfaces"

const initialState:Client = {
  itemList: null,
  filterList: null,
  name: '',
  lastName: '',
  type: '',
  address: '',
  indentification: '',
  clientID: '',
  status: 'idle'
}

const clientSlice = createSlice({
  name: 'Client',
  initialState,
  reducers: actions,
  extraReducers(builder) {
    builder
      .addCase(useAddDBClient.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(useAddDBClient.rejected, (state) => {
        state.status = 'rejected'
        toast.success('Ups! Algo salio mal');
      })
      .addCase(useAddDBClient.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.status = 'idle'
        state.clientID = getColumnByIndex(payload.created, 0)
        const formatedList = payload.list.map(category => ({...category, id: getColumnByIndex(category, 6), displayName: getColumnByIndex(category, 5)}))
        state.itemList = formatedList
        state.filterList = formatedList
        toast.success('Categoria creada Exitosamente');
      })
      .addCase(useGetDBClient.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(useGetDBClient.rejected, (state) => {
        state.status = 'rejected'
        toast.success('Ups! Algo salio mal');
      })
      .addCase(useGetDBClient.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.status = 'idle'
        const formatedList = payload.map(category => ({...category, id: getColumnByIndex(category, 6), displayName: getColumnByIndex(category, 5)}))
        state.itemList = formatedList
        state.filterList = formatedList
      })
  },
})
export const { setClientID, setCleanClientID } = clientSlice.actions
export const selectClient = (state:AppState) => state.dataManager.Client
export const ClientReducer = clientSlice.reducer
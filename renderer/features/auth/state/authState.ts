import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { usePostLogin } from "../../../hooks/auth/usePostLogin"

const initialState = {
  username: "",
  password: ""
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: actions,
  extraReducers(builder) {
    builder
      .addCase(usePostLogin.fulfilled, (state, {payload}:PayloadAction<any>) => {
        console.log(payload)
      })
  },
})

export const { setUsername, setPassword } = authSlice.actions

export const authReducer = authSlice.reducer
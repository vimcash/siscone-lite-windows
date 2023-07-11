import React from 'react'
import { LoginFrame } from '../components/LoginFrame/LoginFrame'

export const LoginContainer = ({dispatch, router}) => {
  return <LoginFrame dispatch={dispatch} router={router}/>
}
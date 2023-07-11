import React from 'react'
import { LoginContainer } from '../../features/auth'

const login = ({dispatch, router}) => {
  return <LoginContainer dispatch={dispatch} router={router}/>
}
export default login
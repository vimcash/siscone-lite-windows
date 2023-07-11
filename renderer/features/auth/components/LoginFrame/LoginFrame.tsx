import React from 'react'
import { Button } from '../../../../components/ui'
import { Controller } from './Controller'
import { useAppSelector } from '../../../../hooks'
import { selectEntireState } from '../../../../states/globalState'

export const LoginFrame = ({dispatch, router}) => {
  const { state, setUsername, setPassword, login } = Controller.getInstance(dispatch, useAppSelector(selectEntireState))
  return (
    <div className="">
      <input placeholder='username' onChange={setUsername} value={state.auth.username} />
      <input placeholder='password' onChange={setPassword} value={state.auth.password} />
      <Button icon='save' primary onClick={login}/>
    </div>
  )
}
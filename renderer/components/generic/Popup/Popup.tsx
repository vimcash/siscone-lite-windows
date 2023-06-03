import React from 'react'
import { useAppSelector } from '../../../hooks'
import { AddClient, AddSingle } from './PopupType'
import { hidePopup } from './state/popupState'
import style from './style.module.css'
import Controller from './Controller'
import { selectEntireState } from '../../../states/globalState'

export const Popup = ({dispatch}) => {
  const controller = Controller.getInstance(dispatch, useAppSelector(selectEntireState))
  const { type } = controller.state.popup
  if(type == 'none')
    return <></>
  return <div className={style.container}>
    <div className={style.background} onClick={async () => dispatch(hidePopup())} />
    {
      type == 'addCategory' || type == 'completeBill' ?
        <AddSingle 
          style={style} 
          dispatch={dispatch}
          controller={controller}/> :
        <AddClient
          style={style} 
          dispatch={dispatch}
          controller={controller} />

    }
  </div>
}
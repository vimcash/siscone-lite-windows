import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { AddSingle } from './PopupType'
import { hidePopup, selectPopup } from './state/popupState'
import style from './style.module.css'

export const Popup = ({dispatch}) => {
  const popup = useAppSelector(selectPopup)
  if(popup.type == 'none')
    return <></>
  return <div className={style.container}>
    <div className={style.background} onClick={async () => dispatch(hidePopup())} />
    <AddSingle 
      style={style} 
      dispatch={dispatch}
      popup={popup}/>
  </div>
}
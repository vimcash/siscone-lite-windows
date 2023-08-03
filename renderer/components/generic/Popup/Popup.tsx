import React from 'react'
import { useAppSelector } from '../../../hooks'
import { AddClient, AddSingle } from './PopupType'
import { hidePopup, selectPopupBills } from './state/popupState'
import style from './style.module.css'
import Controller from './Controller'
import { SeeInvoce } from './PopupType/SeeInvoce/SeeInvoce'

export const Popup = ({dispatch}) => {
  const controller = Controller.getInstance(dispatch, useAppSelector(selectPopupBills))
  const { getType } = controller
  if(getType() == 'none')
    return <></>
  return <div className={style.container}>
    <div className={style.background} onClick={async () => dispatch(hidePopup())} />
    {
      getType() == 'addCategory' || getType() == 'completeBill' ?
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
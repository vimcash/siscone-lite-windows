import React from 'react'
import { useAddDBCategory } from '../../../../../features/dataManager/hooks'
import { setDelay, setFocus } from '../../../../../utils'
import Input from '../../../../form/Input/Input'
import { Button } from '../../../../ui'
import { hidePopup, setInput1 } from '../../state/popupState'
import saveTypes from './saveTypes'

export const AddSingle = ({style, dispatch, popup}:any) => {
  const getByType = saveTypes.filter(saveType => saveType.type == popup.type)[0]
  return <>
    <div className={style.subContainer}>
      <label className={style.title}>
        {getByType.title}
      </label>
      <Input
        name='iptPopupAddName'
        className={style.input}
        value={popup.input1}
        placeholder='Nombre de la categoria'
        onChange={(e:string) => dispatch(setInput1(e))}
        onPressEnter={async() => {
          popup.input1.trim() ? 
            await dispatch(useAddDBCategory({categoryName: popup.input1})).then(() => dispatch(hidePopup()))
          : undefined}} 
        autoFocus    
      />
      <Button 
        icon='save'
        title='Guardar' 
        className={style.btnSave} left/>
    </div>
  </>
}
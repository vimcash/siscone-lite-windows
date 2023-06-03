import React from 'react'
import { selectCategory } from '../../../../../features/dataManager/state/Category/categoryState'
import { useAppSelector } from '../../../../../hooks'
import Input from '../../../../form/Input/Input'
import { Button } from '../../../../ui'
import { hidePopup, setInput1 } from '../../state/popupState'
import saveTypes from './saveTypes'

export const AddSingle = ({style, dispatch, controller}:any) => {
  const { popup } = controller.state
  const getByType = saveTypes.find(saveType => saveType.type == popup.type)
  const obj = popup.type == 'addCategory' ? {categoryName: popup.input1} : controller.state
  return <>
    <div className={style.subContainer}>
      <label className={style.title}>
        {getByType.title}
      </label>
      <Input
        name='iptPopupAddName'
        className={[style.input]}
        value={popup.input1}
        placeholder={getByType.placeholder}
        onChange={(e:string) => dispatch(setInput1(e))}
        type={getByType.iptType}
        onPressEnter={async() => {
          popup.input1.trim() ? 
            await dispatch(getByType.function(obj)).then(async() => dispatch(hidePopup()))
          : undefined}} 
        autoFocus    
      />
      <Button 
        icon='save'
        title='Guardar' 
        className={style.btnSave} left
        onClick={() => console.log("Guardar")}/>
    </div>
  </>
}
import React from 'react'
import Input from '../../../../form/Input/Input'
import { Button } from '../../../../ui'

export const AddSingle = ({style, controller}:any) => {
  const { 
    getInput1,
    getPopupTitle,
    getPopupPlaceholder,
    getPopupInputType,
    saveSingle,
    setInput1
  } = controller

  return <>
    <div className={style.subContainer}>
      <label className={style.title}>
        {getPopupTitle()}
      </label>
      <Input
        name='iptPopupAddName'
        className={[style.input]}
        value={getInput1()}
        placeholder={getPopupPlaceholder()}
        onChange={setInput1}
        type={getPopupInputType()}
        onPressEnter={saveSingle} 
        autoFocus    
      />
      <Button 
        icon='save'
        title='Guardar' 
        className={style.btnSave} left
        onClick={saveSingle}/>
    </div>
  </>
}
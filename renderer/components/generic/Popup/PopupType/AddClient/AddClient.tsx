import React from 'react'
import { useAddDBCategory } from '../../../../../features/dataManager/hooks'
import { selectCategory } from '../../../../../features/dataManager/state/Category/categoryState'
import { useAppSelector } from '../../../../../hooks'
import Input from '../../../../form/Input/Input'
import { Button } from '../../../../ui'
import { hidePopup } from '../../state/popupState'

export const AddClient = ({style, dispatch, controller}:any) => {
  const { input1, input2, input3, input4, check1 } = controller.popup
  const { setInput1, setInput2, setInput3, setInput4, onCheck, onEnter, save } = controller
  return <>
    <div className={style.subContainer}>
      <label className={style.title}>
        Agregar Cliente
      </label>
      <div className={style.inputContainer}>
        <Input
          name='iptInput1'
          value={input1}
          placeholder={check1 ? 'Nombre Compañia *' : 'Nombre *'}
          onChange={(e:string) => setInput1(e)}
          onPressEnter={() => onEnter()} 
        />
        <Button 
          icon={check1 ? "company" : "user"} 
          onClick={() => onCheck()}/>
      </div>
      {
        check1 ? <></> :
          <Input
            name='iptInput2'
            className={style.input}
            value={input2}
            placeholder='Apellido *'
            onChange={(e:string) => setInput2(e)}
            onPressEnter={() => onEnter()} 
          /> 
      }
      <Input
        name='iptInput3'
        className={style.input}
        value={input3}
        placeholder={check1 ? "RNC" : "Cedula/Passaporte"}
        onChange={(e:string) => setInput3(e)}
        onPressEnter={() => onEnter()} 
      />
      <Input
        name='iptInput4'
        className={style.input}
        value={input4}
        placeholder='Direccion'
        onChange={(e:string) => setInput4(e)}
        onPressEnter={() => onEnter()} 
      />
      <Button 
        icon='save'
        title='Guardar'
        onClick={() => save()}
        className={style.btnSave} left/>
    </div>
  </>
}
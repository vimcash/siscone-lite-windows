import React from 'react'
import Input from '../../../../form/Input/Input'
import { Button } from '../../../../ui'

export const AddClient = ({style, controller}:any) => {
  const { 
    setInput1, setInput2, 
    setInput3, setInput4,
    getInput1, save,
    getInput2, getInput3, 
    getInput4, getCheck1,
    onCheck, onEnter } = controller
  return <>
    <div className={style.subContainer}>
      <label className={style.title}>
        Agregar Cliente
      </label>
      <div className={style.inputContainer}>
        <Input
          name='iptInput1'
          value={getInput1()}
          placeholder={getCheck1() ? 'Nombre Compañia *' : 'Nombre *'}
          onChange={(e:string) => setInput1(e)}
          onPressEnter={() => onEnter()} 
        />
        <Button 
          icon={getCheck1() ? "company" : "user"} 
          onClick={() => onCheck()}/>
      </div>
      {
        getCheck1() ? <></> :
          <Input
            name='iptInput2'
            className={style.input}
            value={getInput2()}
            placeholder='Apellido *'
            onChange={(e:string) => setInput2(e)}
            onPressEnter={() => onEnter()} 
          /> 
      }
      <Input
        name='iptInput3'
        className={style.input}
        value={getInput3()}
        placeholder={getCheck1() ? "RNC" : "Cedula/Passaporte"}
        onChange={(e:string) => setInput3(e)}
        onPressEnter={() => onEnter()} 
      />
      <Input
        name='iptInput4'
        className={style.input}
        value={getInput4()}
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
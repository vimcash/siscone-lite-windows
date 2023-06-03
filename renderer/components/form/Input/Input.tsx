import React from 'react'
import { setFocus } from '../../../utils'
import { Inteface } from './interface'
import { onPressEnter as onEnterDo } from '../../../utils'
import style from './style.module.css'

//The prop "name" is only for do focus when the user click the container div and for make focus when if the dev want :)
export const Input = ({className, name, onChange, value, onPressEnter, type="text", ...otherProps}:Inteface) => (
  <div className={`${style.container} ${className}`} onClick={() => setFocus(name)}>
    <input 
      className={style.input}
      id={name}
      value={value}
      onChange={({target}:any) => onChange(target.value)}
      onKeyUp={e => onPressEnter ? onEnterDo(e, onPressEnter) : undefined}
      type={type}
      {...otherProps} />
  </div>
)

export default Input
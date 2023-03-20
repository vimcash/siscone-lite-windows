import React from 'react'
import { setFocus } from '../../../utils'
import { Inteface } from './interface'
import { onPressEnter as onEnterDo } from '../../../utils'
import style from './style.module.css'
const Input = ({className, name, onChange, value, onPressEnter, ...otherProps}:Inteface) => (
  <div className={`${style.container} ${className}`} onClick={() => setFocus(name)}>
    <input 
      className={style.input}
      id={name}
      value={value}
      onChange={({target}:any) => onChange(target.value)}
      onKeyUp={e => onPressEnter ? onEnterDo(e, onPressEnter) : undefined}
      {...otherProps} />
  </div>
)

export default Input
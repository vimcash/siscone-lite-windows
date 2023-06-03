import style from './style.module.css'

import React from 'react'

export const StatusText = ({status, text}) => {
  return <span className={`${style.components} ${
      status == "success" || status == "C" ? style.success : 
        status == "warning" || status == "P" ? style.warning : 
          status == "danger" || status == "D" ? style.danger : style.disabled}`}>
    {text || "undefined"}
  </span>
}
import React from 'react'
import Input from '../../../../form/Input/Input'
import { Button } from '../../../../ui'

export const SeeInvoce = ({style, controller}:any) => {

  return <>
    <div className={style.subContainer}>
      <label className={style.invoceTitle}>
        C - Nohely Corp
      </label>
      <label className={style.invoceTitle}>
        55232144596 25/06/2023
      </label>
      <label className={style.invoiceDetail}>
        x30 Prueba
      </label>
      <label className={style.invoiceDetail}>
        x30 Prueba
      </label>
      <label className={style.invoiceDetail}>
        x30 Prueba
      </label>
      <label className={style.invoiceDetail}>
        x30 Prueba
      </label>
      <label className={style.invoiceDetail}>
        x30 Prueba
      </label>
      <label className={style.invoiceDetail}>
        x30 Prueba
      </label>
    </div>
  </>
}
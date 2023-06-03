import React from 'react'
import BillListFrame from '../components/BillListFrame/BllListFrame'

export const BillListContainer = ({dispatch, router}) => {
  return (
    <BillListFrame dispatch={dispatch} router={router} />
  )
}
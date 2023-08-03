import React from 'react'
import BillsFrame from '../components/BillsFrame/BillsFrame'

export const BillsContainer = ({dispatch, billID, router}:any) => <BillsFrame dispatch={dispatch} billID={billID} router={router}/>
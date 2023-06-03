import React from 'react'
import { BillsContainer } from '../../../features/receivables/container/BillsContainer'

const billID = ({router, dispatch}) => <BillsContainer dispatch={dispatch} billID={router.query.billID}/>

export default billID
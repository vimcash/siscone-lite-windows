import React from 'react'
import style from './style.module.css'
import { Input } from '../../../../components/form'
import BillItemList from '../BillItemsList/BillItemList'
import Controller from './Controller'
import { useAppSelector } from '../../../../hooks'
import { selectEntireState } from '../../../../states/globalState'
import { Button } from '../../../../components/ui'

const BillListFrame = ({dispatch, router}) => {
  const state = useAppSelector(selectEntireState)
  const {
    bills,
    billsList,
    redirect,
    onClickBill
  } = Controller.getInstance(dispatch, state.bills, router)
  return <>
    <Input 
      name="iptSearch" 
      className={style.input} 
      placeholder="Busca un Producto..." 
      value="" 
      onChange={e => console.log(e)}/>
    <div className="row"></div>
    <BillItemList 
      onClick={onClickBill}
      dataSource={billsList || []} 
      selectedItem={bills ? bills.selectedBillID : ""}
      onDoubleClick={redirect}/>
    <Button 
      title="Crear Factura" 
      icon="add"
      primary left
      className={style.floatBtn}
      onClick={() => redirect('./bill')}/>
  </>
}

export default BillListFrame
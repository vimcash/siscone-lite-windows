import React from 'react'
import { ComboBox, Input } from '../../../../components/form'
import { Button, Table } from '../../../../components/ui'
import { useAppSelector } from '../../../../hooks'
import { selectReceivables } from '../../state/receivablesReducer'
import Controller from './Controller'
import style from './style.module.css'
const InventoryFrame = ({dispatch}:any) => {
  const {
    inventory,
    onChangeProduct,
    onChangeQty,
    save,
    setClean
  } = Controller.getInstance(dispatch, useAppSelector(selectReceivables))
  return <>
    <Input 
      name="iptSearch" 
      className={style.input} 
      placeholder="Busca un Producto..." 
      value="" 
      onChange={e => console.log(e)}/>
    <div className='row'>
      <div className="col-md-6">
        <Table 
          titles={inventory.titles}
          dataSource={inventory.filterList || []} />
      </div>
      <div className="col-md-6">
        <label>Producto</label>
        <ComboBox
          name='cbProduct'
          className=''
          dataSource={inventory.productList || []}
          onChange={e => onChangeProduct(e.target.value)}
          value={inventory.productID} 
          placeHolder="Seleccionar producto"/>
        <label className='mt-2'>Cantidad</label>
        <Input
          className={style.inputNumber}
          value={inventory.qty}
          placeholder=''
          name="iptQty"
          onChange={e => onChangeQty(e)} 
          type="number" />
        <div className={style.btnContainer}>
          <Button 
            icon="cancel" 
            onClick={() => setClean()}/>
          <Button 
            icon="save" 
            onClick={() => save()}
            primary/>
        </div>
      </div>
    </div>
  </>
}

export default InventoryFrame
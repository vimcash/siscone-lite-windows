import React from 'react'
import { ComboBox, Input } from '../../../../components/form'
import { Button, Table } from '../../../../components/ui'
import { useAppSelector } from '../../../../hooks'
import { selectReceivables } from '../../state/receivablesReducer'
import Controller from './Controller'
import style from './style.module.css'
const InventoryFrame = ({dispatch}:any) => {
  const {
    onChangeProduct,
    onChangeQty,
    save,
    setClean,
    getSearch,
    getTitles,
    getProductID,
    getQty,
    getFilterList,
    getProductList,
    onChangeSearch,
    onDoubleClick
  } = Controller.getInstance(dispatch, useAppSelector(selectReceivables))
  return <>
    <Input 
      name="iptSearch" 
      className={style.input} 
      placeholder="Busca un Producto..." 
      value={getSearch()}
      onChange={onChangeSearch()}/>
    <div className='row'>
      <div className={`${style.tableContainer}`}>
        <Table 
          titles={getTitles()}
          dataSource={getFilterList()} 
          onDoubleClickWithIndexID={onDoubleClick()}/>
      </div>
      <div className={`${style.subContainer}`}>
        <label>Producto</label>
        <ComboBox
          name='cbProduct'
          className=''
          dataSource={getProductList()}
          onChange={e => onChangeProduct(e.target.value)}
          value={getProductID()} 
          placeHolder="Seleccionar producto"/>
        <label className='mt-2'>Cantidad</label>
        <Input
          className={style.inputNumber}
          value={getQty()}
          placeholder=''
          name="iptQty"
          onChange={onChangeQty} 
          type="number" />
        <div className={style.btnContainer}>
          <Button 
            icon="cancel" 
            onClick={setClean}/>
          <Button 
            icon="save" 
            onClick={save}
            primary/>
        </div>
      </div>
    </div>
  </>
}

export default InventoryFrame
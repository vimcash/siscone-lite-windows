import React from 'react'
import { ComboBox, Input } from '../../../../components/form'
import style from './style.module.css'
import { Button, Spinner, Table } from '../../../../components/ui'
import Controller from './Controller'
import { useAppSelector } from '../../../../hooks'
import { selectEntireState } from '../../../../states/globalState'

const BillsFrame = ({dispatch, billID}:any) => {
  const state = useAppSelector(selectEntireState)
  const {
    inputs,
    showCompleteBillPopup,
    bills,
    onClickItem,
    getGoBack,
    goBack
  } = Controller.getInstance(dispatch, state, billID)
  if(getGoBack()){
    goBack()
    return <Spinner />
  }
  return <>
    <Input 
      name="iptSearch" 
      className="d-none"
      placeholder="Busca un Producto..." 
      value="" 
      onChange={e => console.log(e)}/>
    <div className="row">
      <div className={style.tableContainer}>
        <Table 
          titles={['Producto', 'Categoria', 'Cantidad']}
          functionWithIndexID={{func: onClickItem, indexID: 5}}
          dataSource={bills.filterList || []}/>
      </div>
      <div className={style.subContainer}>
        {
          inputs().map(({type, name, title, value, onChange, onEnter, onClickSearch, onClickCreate, onClickAdd, data, subtitle, disable}:any) => <div key={name}>
            <label>{title}{subtitle ? <i>{subtitle}</i>:<></>}</label>
            <div className='d-flex'>
              {
                type == 'combo' ? 
                  <ComboBox 
                    name={name}
                    value={value}
                    dataSource={data}
                    className={style.input}
                    onChange={onChange}
                    disable={disable}/> :
                  <Input
                    name={name}
                    value={value}
                    placeholder=''
                    onChange={onChange}
                    onPressEnter={onEnter} 
                    className={style.input}
                    type={type}/>
              }
              {/* El disable se agrego porque cuando agregas un producto a una factura no se puede editar el cliente,
                  Y en consecuencia tampoco se podra agregar o buscar otro cliente */}
              { onClickSearch && !disable ? <Button className={style.btnAdd} icon="search" onClick={onClickSearch}/> : <></> }
              { onClickCreate && !disable ? <Button className={style.btnAdd} icon="add" onClick={onClickCreate}/> : <></> }
              { onClickAdd && !disable ? <Button className={style.btnAdd} icon="save" primary onClick={onClickAdd}/> : <></> }
            </div>
          </div>)
        }
      </div>
    </div>
    <div className={style.specialBtnContainer}>
      <Button 
        icon="save" 
        title="Terminar"
        onClick={showCompleteBillPopup}
        left primary/>
      <Button 
        icon="cancel" 
        title="Cancelar"
        left/>
    </div>
  </>
}

export default BillsFrame
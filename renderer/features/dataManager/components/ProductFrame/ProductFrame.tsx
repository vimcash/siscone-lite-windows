import React from 'react'
import { ComboBox, Input } from '../../../../components/form'
import { Button, Spinner, Table } from '../../../../components/ui'
import style from './style.module.css'
import { useAppSelector } from '../../../../hooks'
import Controller from './Controller'
import { selectDataManager } from '../../state/dataManagerReducer'

const ProductFrame = ({dispatch}:any) => {
  const dataManager = useAppSelector(selectDataManager)
  const { 
    showAddCategoryPopup, 
    clean, 
    save, 
    onChangeName, 
    onChangeCategory, 
    onChangeCode,
    isPending,
    getProductName, 
    getCategoryList, 
    getProductCode, 
    getCategoryID,
    getTitles,
    getProductList,
    getSearchText,
    onChangeSearch} = Controller.getInstance(dispatch, dataManager)
  return isPending() ? <Spinner /> :
  <>
    <Input 
      name="iptSearch" 
      className={style.inputSearch} 
      placeholder="Busca un Producto..." 
      value={getSearchText()}
      onChange={onChangeSearch}/>
    <div className='row'>
      <div className={style.mainSubContainer}>
        <Table titles={getTitles()} dataSource={getProductList()} />
      </div>
      <div className={style.subContainer}>
        <label>Codigo Producto:</label>
        <input 
          value={getProductCode()}
          onChange={(e:any) => onChangeCode(e.target.value)}
          className={`${style.input}`}/>
        <label>Nombre Producto:</label>
        <input 
          value={getProductName()}
          onChange={(e:any) => onChangeName(e.target.value)}
          className={`${style.input}`}/>
        <label>Categoria:</label>
        <div className='col-12 d-flex'>
          <ComboBox
            name="cbCategory" 
            dataSource={getCategoryList()}
            value={getCategoryID()}
            className={`${style.input} me-1`}
            onChange={(e:any) => onChangeCategory(e.target.value)}/>
          <Button 
            icon='add'
            className={`${style.btnIcon} pt-0 pb-0 me-1`}
            onClick={() => showAddCategoryPopup()} />
          <Button icon='search' className={`${style.btnIcon} pt-0 pb-0`}/>
        </div>
        <div className={style.mainBtn}>
          <Button 
            icon='save'
            className={`${style.btnIcon}`}
            onClick={() => save()}
            primary/>
          <Button 
            icon='cancel' 
            className={`${style.btnIcon}`}
            onClick={() => clean()}/>
        </div>
      </div>
    </div>

  </>
}

export default ProductFrame
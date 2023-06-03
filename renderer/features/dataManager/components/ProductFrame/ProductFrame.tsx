import React from 'react'
import { ComboBox } from '../../../../components/form'
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
    product, 
    category } = Controller.getInstance(dispatch, dataManager)
  return isPending() ? <Spinner /> :
  <>
    <div className='position-absolute p-2 hhp-1 start-0'>
      <div className={`${style.table} p-table pe-2`}>
        <Table titles={product.titles} dataSource={product.filterList || []} />
      </div>
      <div className='row mt-2 w-100 ms-0 me-0'>
        <div className='col-6 ps-0 pe-1'>
          <label>Codigo Producto:</label>
          <input className='col-12'
            value={product.code}
            onChange={(e:any) => onChangeCode(e.target.value)}/>
        </div>
        <div className='col-6 ps-1 pe-0'>
          <label>Categoria:</label>
          <div className='col-12 d-flex'>
            <ComboBox
              name="cbCategory" 
              dataSource={category.itemList || []}
              value={product.categoryID}
              className={`${style.input} me-1`}
              onChange={(e:any) => onChangeCategory(e.target.value)}/>
            <Button 
              icon='add'
              className={`${style.btnIcon} pt-0 pb-0 me-1`}
              onClick={() => showAddCategoryPopup()} />
            <Button icon='search' className={`${style.btnIcon} pt-0 pb-0`}/>
          </div>
        </div>
        <div className='col-12 ps-0 pt-1 pe-0'>
          <label>Nombre Producto:</label>
          <div className="col-12 d-flex">
            <input 
              value={product.name}
              onChange={(e:any) => onChangeName(e.target.value)}
              className={`${style.input} me-1`}/> 
            <Button 
              icon='save'
              className={`${style.btnIcon} pt-0 pb-0 me-1`}
              onClick={() => save()}/>
            <Button 
              icon='cancel' 
              className={`${style.btnIcon} pt-0 pb-0`}
              onClick={() => clean()}/>
          </div>
        </div>
      </div>
    </div>

  </>
}

export default ProductFrame
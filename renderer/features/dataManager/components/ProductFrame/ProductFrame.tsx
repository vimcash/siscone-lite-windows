import React from 'react'
import { ComboBox, InputIcon } from '../../../../components/form'
import { Button, Table } from '../../../../components/ui'
import style from './style.module.css'
import axios from '../../../../lib/axios'
import { showAddCategory } from '../../../../components/generic/Popup/state/popupState'
import { useAppSelector } from '../../../../hooks'
import { selectCategory } from '../../state/Category/categoryState'

const ProductFrame = ({dispatch}:any) => {
  const category = useAppSelector(selectCategory)
  return <>
    <div className='position-absolute p-2 hhp-1'>
      <div className={`${style.table} p-table pe-2`}>
        <Table titles={['Productos', 'Categoria', 'Descripcion']} dataSource={[
          {product: 'Zanahoria' , category: 'Vegetal', desc: 'Prueba'},
          {product: 'Tomate' , category: 'Vegetal', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'}]} />
      </div>
      <div className='row mt-2 w-100'>
        <div className='col-6 pe-1'>
          <label>Codigo Producto:</label>
          <input className='col-12'/>
        </div>
        <div className='col-6 ps-1'>
          <label>Categoria:</label>
          <div className='col-12 d-flex'>
            <ComboBox 
              inOptions={category.itemList}
              value={category.categoryID}
              className={`${style.input} me-1`}
              onChange={(e:any) => console.log(e)}/>
            <Button icon='add' className={`${style.btnIcon} pt-0 pb-0 me-1`} onClick={() => dispatch(showAddCategory())}/>
            <Button icon='search' className={`${style.btnIcon} pt-0 pb-0`}/>
          </div>
        </div>
        <div className='col-12 pt-1'>
          <label>Nombre Producto:</label>
          <input className='col-12'/>
        </div>

      </div>
    </div>

  </>
}

export default ProductFrame
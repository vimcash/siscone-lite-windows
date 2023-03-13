import React from 'react'
import { InputIcon } from '../../../../components/form'
import { Table } from '../../../../components/ui'
import axios from '../../../../lib/axios'

const ProductFrame = () => {
  const pruebaAsync = async () => console.log(await axios({type: 'GET', url: '/api/getConfig'}))
  pruebaAsync()
  return <>
    <div className='position-absolute start-0 p-2 hhp-1'>
      <div className="p-table pe-2">
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
          {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'}]}/>
      </div>
      <div className='row mt-2'>
        <div className='col-6 pe-1'>
          <label>Codigo Producto:</label>
          <input className='col-12'/>
        </div>
        <div className='col-6 ps-1'>
          <label>Categoria:</label>
          <input className='col-12'/>
        </div>
        <div className='col-12 pt-1'>
          <label>Nombre Producto:</label>
          <input className='col-12'/>
        </div>
        <div className='col-12 pt-1'>
          <label>Descripcion:</label>
          <input className='col-12 hp-2 '/>
        </div>
      </div>
    </div>

  </>
}

export default ProductFrame
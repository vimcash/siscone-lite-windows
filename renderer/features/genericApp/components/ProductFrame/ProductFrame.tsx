import React from 'react'
import { Table } from '../../../../components/ui'

const ProductFrame = () => {
  return (
    <div>
      ProductFrame
      <Table titles={['Productos', 'Categoria', 'Descripcion']} dataSource={[
        {product: 'Zanahoria' , category: 'Vegetal', desc: 'Prueba'},
        {product: 'Tomate' , category: 'Vegetal', desc: 'Prueba'},
        {product: 'Televisor' , category: 'Electrodomestico', desc: 'Prueba'},
      ]}/>
    </div>
  )
}

export default ProductFrame
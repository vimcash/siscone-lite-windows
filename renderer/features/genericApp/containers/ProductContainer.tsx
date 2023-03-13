import React from 'react'
import { Navbar } from '../../../layouts/Navbar'
import ProductFrame from '../components/ProductFrame/ProductFrame'

export const ProductContainer = () => {
  return <>
    <Navbar 
      title="Menu"
      onClickRightButton={() => console.log('Prueba')}
      home/>
    <div className='container-fluid'>
      <ProductFrame />
    </div>
  </>
}

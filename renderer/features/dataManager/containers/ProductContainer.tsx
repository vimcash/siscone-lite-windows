import React from 'react'
import { Navbar } from '../../../layouts/Navbar'
import ProductFrame from '../components/ProductFrame/ProductFrame'

export const ProductContainer = ({dispatch}:any) => {
  return <>
    <div className='container-fluid'>
      <ProductFrame dispatch={dispatch}/>
    </div>
  </>
}

import React from 'react'
import ProductFrame from '../components/ProductFrame/ProductFrame'
import { checkAuth } from '../../../utils/checkAuth'

export const ProductContainer = ({dispatch, router}:any) => {
  checkAuth(dispatch, router)
  return <>
    <div className='container-fluid'>
      <ProductFrame dispatch={dispatch}/>
    </div>
  </>
}

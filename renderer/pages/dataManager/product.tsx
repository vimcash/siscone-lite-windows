import React from 'react'
import { ProductContainer } from '../../features/dataManager'

const Product = ({dispatch, router}:any) => {
  return <ProductContainer dispatch={dispatch} router={router} />
}

export default Product
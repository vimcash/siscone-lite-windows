import Link from 'next/link'
import React from 'react'
import { Button } from '../../../../components/ui'
import Controller from './Controller'

const MenuFrame = ({router}:any) => {
  const {
    goToProduct,
    goToInventory,
    goToBills
  } = Controller.getInstance(router)
  return (
    <div className='row position-absolute w-100 pps-2 pe-1 ps-1'>
      <div className=" col-md-6 p-1">
        <Button 
          title="Facturacion" 
          icon="shop" 
          className="w-100 hp1-50 fs-1"
          onClick={() => goToBills()} />
        <div className='pb-2'/>
        <Button 
          title="Inventario"
          icon="store"
          className="w-100 hp1-50 fs-1"
          onClick={() => goToInventory()} />
      </div>
      <div className=" col-md-6 p-1">
        <Button 
          title="Centro de Datos" 
          icon="report" 
          className="w-100 h-100 fs-1"
          onClick={() => goToProduct()}/>
      </div>
    </div>
  )
}

export default MenuFrame
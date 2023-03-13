import Link from 'next/link'
import React from 'react'
import { Button } from '../../../../components/ui'

const MenuFrame = () => {
  return (
    <div className='row position-absolute w-100 pps-2 pe-1 ps-1'>
      <div className=" col-md-6 p-1">
        <Button 
          title="Despacho" 
          icon="card" 
          className="w-100 hp1-50 fs-1"
          onClick={() => console.log('prueba')} />
        <div className='pb-2'/>
        <Button 
          title="Inventario" 
          icon="card" 
          className="w-100 hp1-50 fs-1"
          onClick={() => console.log('prueba')} />
      </div>
      <div className=" col-md-6 p-1">
        <Link href='/dataManager/product'>
          <Button 
            title="Centro de Datos" 
            icon="report" 
            className="w-100 h-100 fs-1"
            onClick={() => console.log('prueba')}/>
        </Link>
      </div>
    </div>
  )
}

export default MenuFrame
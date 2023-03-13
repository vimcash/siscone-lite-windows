import { useRouter } from 'next/router'
import React from 'react'
import { Navbar } from '../../../layouts/Navbar'
import MenuFrame from '../components/MenuFrame/MenuFrame'

export const MainMenu = () => {
  const router = useRouter()
  return <>
    <Navbar 
      title="Menu"
      onClickRightButton={() => console.log('Prueba')}
      home/>
    <div id="home" className={`container-fluid`}>
      <MenuFrame router={router}/> 
    </div>
  </>
}
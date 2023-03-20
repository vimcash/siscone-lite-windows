import { useRouter } from 'next/router'
import React from 'react'
import { Navbar } from '../../../layouts/Navbar'
import MenuFrame from '../components/MenuFrame/MenuFrame'

export const MainMenu = ({router}:any) => {
  return <MenuFrame router={router}/> 
}
import React from 'react'
import MenuFrame from '../components/MenuFrame/MenuFrame'
import { checkAuth } from '../../../utils/checkAuth'

export const MainMenu = ({router, dispatch}:any) => {
  console.log(process.env.NODE_ENV)
  checkAuth(dispatch, router)
  return <MenuFrame router={router}/> 
}
import { useRouter } from 'next/router'
import React from 'react'
import { useAppDispatch } from '../../../hooks'
import { Navbar } from '../../../layouts/Navbar'
import { Popup } from '../Popup/Popup'

const AppFrame = ({Component, pageProps}:any) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  return <> 
    <Popup 
      dispatch={dispatch}/>   
    <Navbar 
      title="Productos"
      router={router}
      dispatch={dispatch}
      onClickRightButton={() => console.log('Prueba')} />

    <div className='container-fluid'>
      <Component dispatch={dispatch} router={router} {...pageProps} />
    </div>
  </>
}

export default AppFrame
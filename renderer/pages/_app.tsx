import React from 'react'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '../assets/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import store from '../data/store'
import Footer from '../layouts/Footer/Footer'
import AppFrame from '../components/generic/AppFrame/AppFrame'
const MyApp = ({ Component, pageProps}:AppProps) => {
  return (
  <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Siscone</title>
      </Head>
      <div className='theme-2'>
        <div className='back'/>
        <ToastContainer theme="dark"/>
          <AppFrame Component={Component} pageProps={pageProps}/>
        <Footer />
      </div>
    </Provider>
  )
}

export default MyApp

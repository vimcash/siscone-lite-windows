import { Toolbar } from '@mui/material'
import React from 'react'
import { YarigaLogo } from '../../assets';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const SidebarNew = () => {
  return (
  <>
    <div className='col-md-2 me-4' />
    <div style={{justifyItems: 'center', padding: '20px', position: 'fixed'}} className="col-md-2 h-100 side-bar">
      <YarigaLogo />
      <Toolbar />
      <button className='w-100 btn button-custom' style={{color: '#fff' }}> <DashboardIcon /><label style={{fontSize: '20px'}}>Prueba</label></button>
    </div>
  </>
  )
}
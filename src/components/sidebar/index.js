import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src='./' className='profile-image' alt='profile' />
      <div>
        <SidebarButton/>
        <SidebarButton/>
        <SidebarButton/>
        <SidebarButton/>
        <SidebarButton/>
      </div>
        <SidebarButton/>
    </div>
  )
}

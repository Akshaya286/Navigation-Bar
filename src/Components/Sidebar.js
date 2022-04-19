import React,{useState} from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Dashboard from './Dashboard'

function Sidebar() {
    
  
  return (
      <div className='sidebar'>
      <div className='menu-items'>
        <a href='dashboard' className='text-center'>Dashboard</a>
        <a href='subscreen' className='text-center'>Subscreen</a>
      </div>
      </div>
  )
}

export default Sidebar
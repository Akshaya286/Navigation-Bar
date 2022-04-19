import React, {useState} from 'react'
import './navbar.css'

function Navbar() {
    const [showLinks, setShowLinks] =useState(false)
  return (
    <div className='navbar'>
        <div className='left-side'>
        <div className='links' id={showLinks?"hidden":"" }>
            <a>Logo</a>
            <a>Doodleblue</a>
            
        </div>
        <button onClick={()=>setShowLinks(!showLinks)}>&#9776;</button>
        </div>
        
        <div className='right-side'>
            {/* <input type="text" placeholder='search...'/> */}
            <button className='btn btn-primary'>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
import React, { useState } from "react";
import './header.css'

function Header() {
    
    return(
        <div className="header">
           <div className="logo-container">
               <h1>Logo</h1>
           </div>
           <div className="nav-items ">
           <div className="nav-close show-nav">
                 <h2>&#10539;</h2>
             </div>
             <div className="nav">
                 <h2>Home</h2>
             </div>
             <div className="nav">
                 <h2>About Us</h2>
             </div>
             <div className="nav">
                 <h2>Location</h2>
             </div>
             <div className="nav">
                 <h2>Contact Us</h2>
             </div>
            
           </div>
           <div className="toggle-bar">
                 <h2>&#9776;</h2>
             </div>
        </div>
    )
}

export default Header
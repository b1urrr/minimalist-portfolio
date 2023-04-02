import React, { useState } from 'react';
import './navbar.css';


const Menu = () => (
  <>
    <p><a href='#resume'>About</a></p>
    <p><a href='#projects'>Projects</a></p>
  </>
)

function Navbar() {
    return (
      <div className='pf__navbar'>
        <div className='pf__navbar-links'>
          <div className='pf__navbar-links_container'>
            <Menu />
          </div>
        </div>
      </div>
    )
  }

export default Navbar;
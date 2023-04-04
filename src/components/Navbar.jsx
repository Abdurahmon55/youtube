import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../image/AVEj5ZRBmgh2A_UjfbRqjg.png'
import Info from './Info'
import Search from './Search'
function Navbar() {
  return (
    <div className="container flex fixed bg-white justify-between items-center">
      <div className="logo w-20">
        <NavLink to={'/'}>
          <img  src={logo} alt="" />
        </NavLink>
        
      </div>
      <Search />
      <Info />
    </div>
  )
}

export default Navbar
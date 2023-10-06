import React, { useContext } from 'react'
import {IoMenu} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import imgUrl from '../../../assets/logo.png'
import { SidebarContext } from '../../../context/SidebarContext'

const LeftNav = () => {
  const {handleToggleSidebar} = useContext(SidebarContext);
  
  
  return (
    <div className='menu-logo'>
      <button 
        onClick={handleToggleSidebar}
        className='icon-container burgerMenu'>
        <IoMenu size={25} />
      </button>

      <div className='logo-container'>
        <Link to='/'>
          <img src={imgUrl} alt="youtube logo" data-tip='YouTube Home' data-for='sidebar' />
        </Link>
      </div>
    </div>
  )
}

export default LeftNav
import React from 'react'
import {IoMenu} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import imgUrl from '../../../assets/logo.png'

const LeftNav = () => {
  return (
    <div className='menu-logo'>
      <button className='icon-container burgerMenu'>
        <IoMenu size={25} />
      </button>

      <div>
        <Link>
          <img src={imgUrl} alt='youtube logo' />
        </Link>
      </div>
    </div>
  )
}

export default LeftNav
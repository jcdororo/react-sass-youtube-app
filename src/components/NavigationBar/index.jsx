import React from 'react';
import LeftNav from './LeftNav';
import SearchBar from './SearchBar';
import RightNav from './RightNav'

const NavigationBar = () => {
  return (
    <nav className='Navbar'>
      <LeftNav />
      <SearchBar />
      <RightNav />
    </nav>
  )
}

export default NavigationBar
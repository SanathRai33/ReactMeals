import React from 'react'
import Cart from '../Cart/CartButton'
import './Header.css'

const Header = ({setIsOpen}) => {
  return (
    <div className='header'>
      <h2>
        <span className='react-clr'>R</span>eact<span className='red-clr'>M</span>eals
      </h2>
      <Cart cartCount={0} setIsOpen={setIsOpen}  />
    </div>
  )
}

export default Header

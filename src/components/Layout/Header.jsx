import React from 'react'
import Cart from '../Cart/Cart'

const Header = () => {
  return (
    <div className='header'>
      <h2>
        <span className='react-clr'>R</span>eact<span className='red-clr'>M</span>eals
      </h2>
      <Cart cartCount={0} />
    </div>
  )
}

export default Header

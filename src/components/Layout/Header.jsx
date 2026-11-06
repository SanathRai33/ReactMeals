import React from "react";
import CartButton from '../Cart/CartButton'
import './Header.css'

const Header = ({ setIsOpen }) => {

  return (
    <div className='header'>
      <h2>
        <span className='react-clr'>R</span>eact<span className='red-clr'>M</span>eals
      </h2>
      <CartButton setIsOpen={setIsOpen} />
    </div>
  )
}

export default Header

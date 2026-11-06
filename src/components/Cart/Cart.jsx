import React from 'react'
import { IoCartSharp } from "react-icons/io5";

const Cart = ({ cartCount }) => {
    return (
        <div className='cart'>
            <div className='icon'>
                <IoCartSharp className='cart-icon' />
            </div>
            <h3>
                Your Cart
            </h3>
            <p>
                {cartCount}
            </p>
        </div>
    )
}

export default Cart

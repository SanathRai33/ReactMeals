import React, { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import { IoCartSharp } from "react-icons/io5";

const Cart = ({ setIsOpen }) => {

    const cartCtx = useContext(CartContext);

    const totalItems = cartCtx.items.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartOpenHandler = () => {
        setIsOpen(true)
    }

    return (
        <div className='cart' onClick={cartOpenHandler}>
            <div className='icon'>
                <IoCartSharp className='cart-icon' />
            </div>
            <h3>
                Your Cart
            </h3>
            <p>
                {totalItems}
            </p>
        </div>
    )
}

export default Cart

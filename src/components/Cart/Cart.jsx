import React, { useContext } from "react";
import { createPortal } from "react-dom";

import { CartContext } from "../../store/CartContext";

import "./Cart.css";

const Cart = ({ isOpen, setIsOpen }) => {

    const cartCtx = useContext(CartContext);

    if (!isOpen) return null;

    const totalAmount = cartCtx.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const cartCloseHandler = () => {
        setIsOpen(false)
    }

    return createPortal(
        <div className="cart-backdrop">

            <div className="cart-modal">

                <ul className="cart-items">

                    {cartCtx.items.map((item) => (
                        <li key={item.mealsId}>
                            <div>
                                <h4>{item.name}</h4>
                                <p>
                                    $ {item.price.toFixed(2)} × {item.quantity}
                                </p>
                            </div>
                            <div>
                                <p> $ {item.price.toFixed(2) * item.quantity}</p>
                            </div>
                        </li>
                    ))}

                </ul>

                <div className="cart-total">
                    <h2>Total Amount</h2>
                    <h2>${totalAmount.toFixed(2)}</h2>
                </div>

                <div className="cart-actions">
                    <button className="close-btn" onClick={cartCloseHandler}>Close</button>
                    <button className="order-btn">Order</button>
                </div>

            </div>

        </div>,
        document.getElementById("overlays")
    );
};

export default Cart;
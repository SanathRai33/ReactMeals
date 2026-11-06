import React from "react";
import { createPortal } from "react-dom";
import "./Cart.css";

function Cart({ isOpen, setIsOpen}) {
    const cartItems = [
        {
            id: 1,
            name: "Sushi",
            price: 22.99,
            quantity: 1,
        },
        {
            id: 2,
            name: "Schnitzel",
            price: 16.5,
            quantity: 1,
        },
        {
            id: 3,
            name: "Barbecue Burger",
            price: 12.99,
            quantity: 1,
        },
    ];

    const cartCloseHandler = () =>{
        setIsOpen(false)
    }

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if(!isOpen){
        return (
            <></>
        )
    }

    return createPortal(
        <div className="cart-backdrop">
            <div className="cart-modal">
                <ul className="cart-items">
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <span>
                                ${item.price.toFixed(2)} × {item.quantity}
                            </span>
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
}

export default Cart;

import React, { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    addItem: (item) => { },
});

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        setCartItems((prevCart) => {

            const existingItem = prevCart?.find((cartItem) => cartItem.mealsId === item.mealsId);

            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.mealsId === item.mealsId ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }

            return [
                ...prevCart,
                {
                    ...item,
                    quantity: 1,
                },
            ];
        });
    };


    const removeItem = (item) => {
        setCartItems((prevCart) => {

            if (item.quantity === 1) {
                return prevCart.filter((cartItem) => cartItem.mealsId !== item.mealsId);
            }

            return prevCart.map((cartItem) =>
                cartItem.mealsId === item.mealsId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);

        });
    };


    const clearCart = () => {
        setCartItems([])
    }

    const cartContextValue = {
        items: cartItems,
        addItem: addItem,
        clearCart: clearCart,
        removeItem: removeItem
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
}


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

    const cartContextValue = {
        items: cartItems,
        addItem: addItem,
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
}

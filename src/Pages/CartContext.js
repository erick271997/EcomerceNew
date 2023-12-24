import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
 return useContext(CartContext);
}

export function CartProvider({ children }) {
 const [cartItems, setCartItems] = useState([]);

 const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isItemInCart = prevItems.find((item) => item.id === product.id);
      if (isItemInCart) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
 };

 const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
 };

 const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

 return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
 );
}
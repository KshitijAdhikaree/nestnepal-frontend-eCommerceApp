import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()
const CartProvider = ({ children }) => {
  //Cart State
  const [cart, setCart] = useState([])

  //add to cart
  const addToCart = () => {
    console.log('added to cart')
  }
  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

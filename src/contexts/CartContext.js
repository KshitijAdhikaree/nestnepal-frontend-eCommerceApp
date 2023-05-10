import React, { createContext, useState, useEffect } from 'react'
import CartItem from '../components/CartItem'

export const CartContext = createContext()
const CartProvider = ({ children }) => {
  //Cart State
  const [cart, setCart] = useState([])
  //item amount state
  const [itemAmout, setItemAmount] = useState(0)

  //update item amount
  useEffect
  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    //check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }
  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }

  //clear cart

  const clearCart = () => {
    setCart([])
  }

  //increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    addToCart(CartItem, id)
  }
  //increase amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeFromCart(id)
    }
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

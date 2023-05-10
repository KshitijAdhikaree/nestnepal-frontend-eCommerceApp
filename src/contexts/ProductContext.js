import React, { createContext, useState, useEffect } from 'react'

//Create Context
export const ProductContext = createContext()

const ProductProvider = ({children}) => {
 // product state
const [products, setProducts] = useState([])
//fetch products
useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)
  }
  fetchProducts()
}, [])

return <ProductContext.Provider>{children}</ProductContext.Provider>
}


export default ProductProvider

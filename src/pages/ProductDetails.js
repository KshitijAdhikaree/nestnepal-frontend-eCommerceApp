import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { ProductContext } from '../contexts/ProductContext'

const ProductDetails = () => {
  //get the product id from the url
  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  //get the sinle peoduct based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id)
  })
  //if product is not found
  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    )
  }
  //destructure product
  const { title, price, description, image, rating } = product
  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        {/* image and text */}
        <div className='flex flex-col lg:flex-col items-center'>
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img
              className='max-w-[200px] lg:max-w-sm'
              src={image}
              alt='productImage'
            />
          </div>
          <div className='flex-1 text-center lg:text-left text-3xl '>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto '>
              {title}
            </h1>
          </div>
          <div className='text-2xl font-bold text-red-800'>$ {price}</div>
          <p className='text-xl text-justify'>{description}</p>
          <button
            onClick={() => addToCart(product, product.id)}
            className='bg-primary py-4 px-8 text-white mt-4'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails

import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'

const Home = () => {
  //get all the product from product context
  const { products } = useContext(ProductContext)

  //get only electronics category
  const filteredProducts = products.filter((item) => {
    return item.category === 'electronics'
  })
  console.log(filteredProducts)
  return (
    <div>
      <section className='py-18'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[20px]'>
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

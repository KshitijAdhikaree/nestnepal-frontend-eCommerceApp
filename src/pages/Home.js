import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'

const Home = () => {
  //get all the product from product context
  const { products } = useContext(ProductContext)
  console.log(products);

  return (
    <div>
      <section className='py-18'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[20px]'>
            {products.map((product) => {
              return <Product product={product} key={product.id} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

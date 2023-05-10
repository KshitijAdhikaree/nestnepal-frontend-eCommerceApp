import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

const Home = () => {
  //get all the product from product context
  const { products } = useContext(ProductContext)
  console.log(products)

  //get only electronics category
  const filteredProducts = products.filter((item) => {
    return (
      item.category ==='electronics'
    )
  })
  console.log(filteredProducts);
  return (
    <div>
      <section>
        <div className='container mx-auto'>
          <div>{filteredProducts.map((product) => {
            return <div>
              {product.title}
            </div>

          })}</div>
        </div>
      </section>
    </div>
  )

 
}

export default Home

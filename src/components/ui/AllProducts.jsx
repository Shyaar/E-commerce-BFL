import React, { useContext, useEffect } from 'react'
import { ProductsData } from '../data/Products'
import ProductCard from './cards/productCard'
import LikeBtn from './btns/LikeBtn'

const AllProducts = () => {
  const { data1, data2 } = useContext(ProductsData) || []
  const allProducts = (data1 && data2 ? [...data1, ...data2] : [])

  useEffect(() => {

  }, [data1, data2])

  return (
    <>
      {!allProducts ? <p>... Loading</p> :
        (
          <div className="grid gap-6 md:flex lg:flex overflow-x-auto">
            {allProducts && allProducts.slice(0, 8).map((data) => (
              <ProductCard id={data.id} key={data.id} image={data.category.image ? data.category.image : data.image} title={data.category.name ? data.category.name : data.name} price={data.price} />
            ))}
          </div>
        )}
    </>
  )
}

export default AllProducts
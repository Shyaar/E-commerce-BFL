import React, { useContext,useEffect } from 'react'
import { ProductsData } from './Products'
import ProductCard from '../ui/cards/productCard'

const BestSelling = () => {
    const { data2 } = useContext(ProductsData)||[]

      useEffect(()=>{
    
      },[data2])

    return (
        <>
            {!data2? <p>... Loading</p> :
            (<div className="grid gap-6 md:flex lg:flex overflow-x-auto">
                {data2 && data2.slice(0, 5).map((data) => (
                    <ProductCard id={data.id} key={data.id} image={data.category.image} title={data.category.name} price={data.price} />
                ))}
            </div>)}
        </>
    )
}



export default BestSelling
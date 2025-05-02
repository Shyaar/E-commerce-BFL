import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import SecondaryBtn from '../components/ui/btns/SecondaryBtn'
import { wishListContext } from '../components/wishlistProvider'
import ProductCard from '../components/ui/cards/productCard'



const WishList = () => {


    const { wishlistItems, setWishListItems } = useContext(wishListContext)

    useEffect(() => {
    }, [wishlistItems])

    return (
        <>
            <div className="mx-6 lg:mx-24 md:flex overflow-x-auto overflow-hidden">
                <div className='grid w-full'>
                    <div id="heading" className='my-6 w-full'>
                        <div className="w-full md:px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-[1fr,3fr] mt-48 md:mt-36 lg:mt-2 gap-8">
                            <div className='flex flex-col justify-center w-full md:flex gap-2 items-center'>
                                <p className="text w-fit">WishList({wishlistItems.length})</p>
                                <SecondaryBtn text="Move All To Bag" />
                            </div>
                        </div>
                    </div>
                    <div className='my-20'>
                        {wishlistItems.length == 0 ? <p>... No Liked Products. PLEASE LIKE A PRODUCT</p> :
                            (
                                <div className="grid gap-6 md:grid-cols-2 lg:flex overflow-x-auto">
                                    {wishlistItems && wishlistItems.map((data) => (
                                        <ProductCard id={data.id} key={data.id} image={data.category.image ? data.category.image : data.image} title={data.category.name ? data.category.name : data.name} price={data.price} />
                                    ))}
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishList
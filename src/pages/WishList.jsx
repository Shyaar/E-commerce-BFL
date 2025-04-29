import React, { Children, createContext, useContext, useState } from 'react'
import SecondaryBtn from '../components/ui/btns/SecondaryBtn'

export const WishListProducts = createContext()

const WishList = () => {
    

    const [wishlistItems, setWishListItems] = useState([])




    return (
        <>
            <div id="heading">
                <div className="md:px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-[1fr,3fr] mt-48 md:mt-36 lg:mt-2 gap-8">
                    <div className='flex justify-betweiden items-center'>
                    <p className="text">WishList({wishlistItems.length})</p>
                    <SecondaryBtn text="Move All To Bag" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishList
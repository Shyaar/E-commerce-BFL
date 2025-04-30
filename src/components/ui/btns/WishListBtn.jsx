import React, { useContext } from 'react'
import { useState } from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { wishListContext } from '../../wishlistProvider';



const WishListBtn = () => {
    const { wishlistItems, setWishListItems } = useContext(wishListContext)
    

    return (
        <>
            <div className='relative'>
                {wishlistItems.length > 0 ? (
                    <>
                        <p className='flex items-center justify-center w-fit py-[3px] px-2 rounded-full text-white bg-[#DB4444] text-[12px] absolute left-4 -top-2'>{wishlistItems.length}</p>
                        <IoIosHeartEmpty className='text-[30px] p-1 ' />

                    </>
                ) : <IoIosHeartEmpty className='text-[30px] p-1 ' />}
            </div>
        </>
    )
}

export default WishListBtn
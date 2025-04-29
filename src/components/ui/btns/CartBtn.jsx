import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';


const CartBtn = () => {
    const [cartCount, setCartCouont] = useState(0)

    return (
        <>
            <div className='relative'>
                {cartCount ? (
                    <>
                        <p className='flex items-center justify-center w-fit py-[3px] px-2 rounded-full text-white bg-[#DB4444] text-[12px] absolute left-4 -top-2' >{cartCount}</p>
                        <IoCartOutline className='text-[30px] p-1 ' />
                    </>

                ) : <IoCartOutline className='text-[30px] p-1 ' />}

            </div>

        </>
    )
}

export default CartBtn
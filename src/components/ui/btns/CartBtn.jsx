import React, { useContext, useEffect } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';
import { cartContext } from '../../CartProvider';


const CartBtn = () => {
    const { cartItems, setCartItems } = useContext(cartContext)
    
    useEffect(()=>{
        console.log(cartItems.length)
    },[cartItems])


    return (
        <>
            <div className='relative'>
                {cartItems.length > 0 ? (
                    <>
                        <p className='flex items-center justify-center w-fit py-[3px] px-2 rounded-full text-white bg-[#DB4444] text-[12px] absolute left-4 -top-2' >{cartItems.length}</p>
                        <IoCartOutline className='text-[30px] p-1 ' />
                    </>

                ) : <IoCartOutline className='text-[30px] p-1 ' />}

            </div>

        </>
    )
}

export default CartBtn
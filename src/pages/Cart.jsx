import React, { useContext } from 'react'
import { cartContext } from '../components/CartProvider'
import { NavLink, Link } from 'react-router-dom'


const Cart = () => {
  const { cartItems, setCartItems } = useContext(cartContext)
  console.log(cartItems)
  return (
    <>
      <div className="mx-6 md:mx-24 ">
        <div className='grid w-full my-4'>
          <div id="heading" className='my-6 w-full'>
            <div className="w-full md:px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-[1fr,3fr] mt-48 md:mt-36 lg:mt-2 gap-8">
              <div className='flex flex-col justify-center w-full md:flex gap-2 items-center'>
                <p className='w-full text-[14px] '><Link className='text-black/50' to="/">Home</Link> /Cart</p>
              </div>
            </div>
          </div>
        </div>

        <div id='items' className=''>
          <div id="tableHead" className='flex border justify-between'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
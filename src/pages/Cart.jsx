import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../components/CartProvider'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import SecondaryBtn from '../components/ui/btns/SecondaryBtn';
import PrimaryBtn from '../components/ui/btns/PrimaryBtn';


const Cart = () => {
  const { cartItems, setCartItems } = useContext(cartContext)
  console.log(cartItems)

  cartItems.length > 0? console.log(cartItems.price):console.log("empty")


  const [subTotal, setSubTotal] = useState(0)

  const [shippingPrice, setShippingPrice] = useState("free")

  const [Total, setTotal] = useState(0)

  const accTotal = cartItems.length >0 ? cartItems.map(items => items.price) : 0

  // accTotal = accTotal.reduce((acc,curr)=> acc + curr )

  console.log(Array.isArray(accTotal))

  useEffect(() => {
    setSubTotal(accTotal)
    
  }, [cartItems])






  function handleRemove(id) {
    const removed = cartItems.filter(item => item.id != id)

    setCartItems(removed)
  }

  function handleIncrease(id) {

    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, numToBuy: item.numToBuy + 1 };
      }
      return item;
    });

    setCartItems(updatedCart);
  }

  function handleDecrease(id) {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, numToBuy: item.numToBuy - 1 };
      }
      return item;
    });

    setCartItems(updatedCart);
  }



  useEffect(() => {

  }, [cartItems])


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

        <div id='itemsHead' className=''>
          <div id="tableHead" className='flex border my-4 border-black/5 p-4 shadow-sm justify-between'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>

        <div id="items">
          {<div className='my-20'>
            {cartItems.length === 0 ? <p>... No Liked Products. PLEASE Add A PRODUCT TO CART</p> :
              (
                <div className="grid overflow-y-auto">
                  {cartItems && cartItems.map((data) => (
                    <div key={data.id} className='flex border items-center border-black/5 p-4 my-2 shadow-sm justify-between'>
                      <div className='flex gap-3 items-center'>
                        <div id="image" className='w-[50px] h-[50px] relative'>
                          <div id="close" className='absolute -top-2'>
                            <IoIosCloseCircle className='text-[#DB4444]' onClick={() => handleRemove(data.id)} />
                          </div>
                          <img src={data.category.image ? data.category.image : data.image} alt="" className='w-full h-full inset-0 object-contain' />
                        </div>
                        <div id="name">{data.category.name ? data.category.name : data.name}</div>
                      </div>
                      <div id="price">
                        <p>{data.price}</p>
                      </div>
                      <div id="quantity" className='flex items-center rounded p-2 gap-2 border border-black/5'>
                        <p>{data.numToBuy}</p>
                        <div id="arrows" className=' text-[10px]'>
                          <MdKeyboardArrowUp onClick={() => handleIncrease(data.id)} />
                          <MdKeyboardArrowDown onClick={() => handleDecrease(data.id)} />
                        </div>
                      </div>
                      <div id="subtotal">
                        <p>{data.numToBuy * data.price}</p>
                      </div>

                    </div>
                  ))}
                </div>
              )}
          </div>}

        </div>

        <div id="return/update" className='my-6 w-full'>
          <div className='flex flex-col justify-center w-full md:flex-row md:justify-between gap-2 items-center border'>
            <SecondaryBtn text="Return to Shop" />
            <SecondaryBtn text="Update cart" />
          </div>
        </div>

        <div id="checkOut" className='flex justify-center w-full md:flex-cols-2 md: md:justify-between gap-2 items-center'>

          <div className='flex flex-col items-center gap-3 lg:flex-row md:justify-between w-full'>
            <input type="text" className='bg-transparent p-2 border border-black/5' placeholder='Coupon Code' />
            <PrimaryBtn text="Apply Coupon" />
          </div>

          <div className='border-2 border-black p-4 rounded w-full'>
            <p className='font-bold text-[20px] my-2'>Cart Total</p>
            <div>
              <div className='flex justify-between py-2 border-b'>
                <p>Subtotal:</p>
                <p>{subTotal}</p>
              </div>
              <div className='flex justify-between py-2 border-b'>
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className='flex justify-between py-2'>
                <p>Total:</p>
                <p>{Total}</p>
              </div>

              <PrimaryBtn text="Proceed to checkout" />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Cart
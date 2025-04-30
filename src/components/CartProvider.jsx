import React, { Children, createContext, useState } from 'react'

export const cartContext = createContext()

const CartProvider = ({children}) => {

    const [ cartItems,setCartItems ] = useState([])

  return (
    <>
    <cartContext.Provider value={{cartItems,setCartItems}}>
        {children}
    </cartContext.Provider>
    
    </>
  )
}

export default CartProvider
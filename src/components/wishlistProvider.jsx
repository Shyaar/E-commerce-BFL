import React, { createContext, useEffect, useState } from 'react'
import { MdOutlinePublishedWithChanges } from 'react-icons/md'

export const wishListContext = createContext()

const WishlistProvider = ({children}) => {


  const [wishlistItems, setWishListItems] = useState([])
  
  return (
    <>
      <wishListContext.Provider value={{ wishlistItems, setWishListItems }}>
        {children}
      </wishListContext.Provider>
    </>
  )
}

export default WishlistProvider
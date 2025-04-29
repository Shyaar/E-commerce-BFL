import React, { createContext, useEffect, useState } from 'react'

export const wishhListContext = createContext()

const WishlistProvider = ({children}) => {


  const [wishlistItems, setWishListItems] = useState([])
  return (
    <>
      <wishhListContext.Provider value={{ wishlistItems, setWishListItems }}>
        {children}
      </wishhListContext.Provider>
    </>
  )
}

export default WishlistProvider
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductsProvider from './components/data/Products.jsx'
import CountdownProvider from './components/ui/Timer.jsx'
import WishList from './pages/WishList.jsx'
import WishlistProvider from './components/wishlistProvider.jsx'
import CartProvider from './components/CartProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <CountdownProvider>
        <WishlistProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </WishlistProvider>
      </CountdownProvider>
    </ProductsProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductsProvider from './components/data/Products.jsx'
import CountdownProvider from './components/ui/Timer.jsx'
import WishList from './pages/WishList.jsx'
import WishlistProvider from './pages/wishlistProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <CountdownProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CountdownProvider>
    </ProductsProvider>
  </StrictMode>,
)

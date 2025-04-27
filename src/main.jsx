import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductsProvider from './components/data/Products.jsx'
import CountdownProvider from './components/ui/Timer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <CountdownProvider>
        <App />
      </CountdownProvider>
    </ProductsProvider>
  </StrictMode>,
)

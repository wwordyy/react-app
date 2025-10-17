import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
        <CartProvider>
              <StrictMode>
                    <App />
              </StrictMode>
          </CartProvider>
  </ThemeProvider>
);

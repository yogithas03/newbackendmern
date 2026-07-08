
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './Provider/ThemeProvider.jsx'
import InputProvider from './Provider/InputProvider.jsx'

import ProfileProvider from './Provider/ProfileProvider.jsx'
import ProductCardProvider from './Provider/ProductCardProvider.jsx'
import StudentProvider from './Provider/StudentProvider.jsx'
import CartProvider from './Provider/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
 
  <InputProvider>
  <ProfileProvider>
    <ProductCardProvider>
        <ThemeProvider>
            <StudentProvider>
                <CartProvider>
                   <App />
                </CartProvider>
                
            </StudentProvider>
              
        </ThemeProvider>
         
    </ProductCardProvider>
   
  </ProfileProvider>
 
  </InputProvider>
   

   
  
)

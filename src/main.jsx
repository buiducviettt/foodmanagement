import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './components/GlobalStyles/index.jsx';
import { CartProvider } from './context/CartContext/index.jsx';
import { DiscountProvider } from './context/DiscountContext/index.jsx';
import { OrderProvider } from './context/OrderContext/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OrderProvider>
      <DiscountProvider>
        <CartProvider>
          <GlobalStyle>
            <App />
          </GlobalStyle>
        </CartProvider>
      </DiscountProvider>
    </OrderProvider>
  </StrictMode>,
);

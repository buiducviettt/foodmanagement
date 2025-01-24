import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './components/GlobalStyles/index.jsx';
import { CartProvider } from './context/CartContext/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </CartProvider>
  </StrictMode>,
);

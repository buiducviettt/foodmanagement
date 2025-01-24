/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';

// Tạo CartContext
const CartContext = createContext();

// Provider cho CartContext
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
      setTotalPrice(total.toFixed(2));
    };
    calculateTotalPrice();
  }, [cartItems]);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm vào với số lượng ban đầu là 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Hàm kiểm tra số lượng sản phẩm trong giỏ
  const getCartCount = () => cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getCartCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook để sử dụng CartContext
export const useCart = () => {
  return useContext(CartContext);
};

/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
export const OrderContext = createContext();
export const OrderProvider = ({ children }) => {
  const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
  const [orders, setOrders] = useState(storedOrders);
  // khi orders thêm thì lưu vô local
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);
  // random trạng thái
  const getRandomStatus = () => {
    const statuses = ['pending', 'complete', 'preparing'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };
  // thêm đơn hàng mới
  const createNewOrder = (cartItems, cardholderName, totalPrice) => {
    const newOrder = {
      id: Date.now(),
      customer: cardholderName,
      items: cartItems,
      total: totalPrice,
      date: new Date().toDateString(),
      status: getRandomStatus(),
    };
    // Thêm vào danh sách đơn hàng
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, newOrder];
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      return updatedOrders;
    });
    return newOrder; // Trả về đơn hàng vừa tạo
  };
  // Lấy tổng số đơn hàng
  const getTotalOrders = () => orders.length;
  const countUniqueCustomers = () => {
    const names = orders.map((order) => order.customer);
    const uniqueNames = new Set(names); // Sử dụng Set để loại bỏ trùng lặp
    return uniqueNames.size; // Trả về số lượng khách hàng duy nhất
  };
  // Xóa toàn bộ đơn hàng
  const clearOrders = () => {
    localStorage.removeItem('orders');
    setOrders([]); // Cập nhật lại state
  };
  return (
    <OrderContext.Provider
      value={{
        orders,
        createNewOrder,
        getTotalOrders,
        clearOrders,
        countUniqueCustomers,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

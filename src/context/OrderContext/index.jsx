/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { updatedStock } from '../../api';
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
  const createNewOrder = async (cartItems, cardholderName, totalPrice) => {
    const newOrder = {
      id: Date.now(),
      customer: cardholderName,
      items: cartItems,
      total: totalPrice,
      date: new Date().toDateString(),
      status: getRandomStatus(),
    };
    // trừ tồn kho
    for (const item of cartItems) {
      await updatedStock(item.id, item.quantity || 1); // Gọi hàm cập nhật tồn kho
    }
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
  // ranking món ăn
  const getTopDishes = (orders) => {
    console.log('Orders received in getTopDishes:', orders); // Kiểm tra orders
    const dishCounts = orders.reduce((acc, order) => {
      order.items.forEach((item) => {
        console.log('Item name:', item.title);
        const name = item.title;
        const quantity = item.quantity || 1;
        if (name) {
          acc[name] = (acc[name] || 0) + quantity; // Đếm số lần xuất hiện của món ăn
        }
      });
      return acc;
    }, {});

    // Sắp xếp theo số lượng giảm dần và thêm thông tin cho từng món ăn
    const ranking = Object.entries(dishCounts)
      .sort((a, b) => b[1] - a[1]) // Sắp xếp theo số lượng
      .map(([name, count], index) => {
        // Lấy thông tin hình ảnh và tiêu đề từ món ăn trong orders
        const item = orders
          .flatMap((order) => order.items) // Duyệt qua tất cả các món ăn
          .find((item) => item.title === name); // Tìm món ăn có tên trùng với name

        return {
          rank: index + 1,
          name,
          count,
          image: item ? item.image : null, // Lấy hình ảnh từ món ăn
        };
      });

    return ranking;
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createNewOrder,
        getTotalOrders,
        clearOrders,
        countUniqueCustomers,
        getTopDishes,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

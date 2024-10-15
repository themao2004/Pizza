import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const MenuComponent = ({ addToCart }) => {
  const [items, setItems] = useState([]); // Khởi tạo state cho items

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://api-demo-4gqb.onrender.com/products");
        const data = await response.json();
        
        // Chuyển đổi dữ liệu về định dạng mà MenuItem yêu cầu
        const formattedItems = data.data.map(item => ({
          id: item.id,
          image: item.image,
          title: item.title,
          originalPrice: item.price, // Sử dụng giá gốc từ API
          price: item.salePrice || item.price, // Sử dụng giá khuyến mãi nếu có, ngược lại sử dụng giá gốc
          badge: "", // Nếu cần có thể thêm logic cho badge
        }));

        setItems(formattedItems); // Cập nhật state với dữ liệu từ API
      } catch (error) {
        console.error("Failed to fetch items:", error); // Xử lý lỗi
      }
    };

    fetchItems(); // Gọi hàm fetchItems khi component mount
  }, []); // [] để chỉ chạy 1 lần khi component mount

  return (
    <div className="bg-dark text-white py-5">
      <section className="container px-5">
        <h2 className="text-left mb-4">Our Menu</h2>
        <div className="row g-4 justify-content-center">
          <MenuItem items={items} addToCart={addToCart} />
        </div>
      </section>
    </div>
  );
};

export default MenuComponent;

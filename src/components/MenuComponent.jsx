import MenuItem from "./MenuItem";


const MenuComponent = ({ addToCart }) => {
  const items = [
    {
      id: 1,
      image: "./imges/menu1.jpg",
      title: "Margherita Pizza",
      originalPrice: 40.99,
      price: 24.344,
      badge: "",
    },
    
    {
      id: 2,
      image: "./imges/menu2.jpg",
      title: "Chan ga xot thai",
      originalPrice: 50.99,
      price: 24.344,
      bade: "",
    },

    {
      id: 3,
      image: "./imges/boDatVang.jpg",
      title: "Bo Dat Vang",
      originalPrice: 49.99,
      price: 29.99,
      bade: "",
    },

    {
      id: 4,
      image: "./imges/lauGaBinhThuan.jpg",
      title: "Lau ga binh thuan",
      originalPrice: 120.99,
      price: 100.344,
      bade: "",
    },
  ];

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

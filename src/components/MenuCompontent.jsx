import MenuItem from "./MenuItem";

const MenuComponent = () => {
  const items = [
    {
      id: 1,
      image: "./imges/menu1.jpg",
      title: "Margherita Pizza",
      originalPrice: 40.99,
      price: 24.344,
      badge: "Sell",
    },
    {
      id: 2,
      image: "./imges/menu2.jpg",
      title: "Mushroom Pizza",
      price: 25.99,
    },
    {
      id: 3,
      image: "./imges/menu3.jpg",
      title: "Hawaiian Pizza",
      price: 30.777,
      badge: "New",
    },
    {
      id: 4,
      image: "./imges/menu4.jpg",
      title: "Pesto Pizza",
      originalPrice: 50.999,
      price: 36.889,
      badge: "Sale",
    },
  ];

  return (
    <div className="bg-dark text-white py-5">
      <section className="container px-5">
        <h2 className="text-left mb-4">Our Menu</h2>
        <div className="row g-4 justify-content-center">
          <MenuItem items={items} />
        </div>
      </section>
    </div>
  );
};

export default MenuComponent;

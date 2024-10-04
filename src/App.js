import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import BannerComponent from "./components/Banner";
import MenuComponent from "./components/MenuComponent";
import FormComponent from "./components/Form";
import CartPopupComponent from "./components/CartPopupComponent";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  return (
    <>
      <HeaderComponent cartItems={cartItems} openCart={openCart} />
      <BannerComponent />
      <MenuComponent addToCart={addToCart} />
      <FormComponent />
      <CartPopupComponent
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        show={showCart}
        handleClose={closeCart}
      />
    </>
  );
}

export default App;

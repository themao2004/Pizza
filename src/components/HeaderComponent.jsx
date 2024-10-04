import "../style/HeaderComponent.scss";

const HeaderComponent = ({ cartItems, openCart }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container px-5">
          <h2 className="navbar-brand fs-3 fw-normal align-self-center mb-0">
            Pizza House
          </h2>
          <div className="ms-auto d-flex align-items-center">
            <button
              className="btn btn-danger"
              onClick={openCart}
            >
              Cart ({totalItems})
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;

import { Modal, Button } from "react-bootstrap";

const CartPopupComponent = ({
  cartItems,
  updateQuantity,
  removeItem,
  show,
  handleClose,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h5>{item.title}</h5>
                <p>${item.price}</p>
              </div>
              <div className="d-flex align-items-center">
                <Button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                <span className="mx-2">{item.quantity}</span>
                <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                <Button
                  variant="danger"
                  className="ms-3"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>No items in cart.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartPopupComponent;

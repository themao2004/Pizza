import { Modal, Button, Toast } from "react-bootstrap";
import { useState } from "react";

const CartPopupComponent = ({
  cartItems,
  updateQuantity,
  removeItem,
  show,
  handleClose,
  setCartItems, // Đảm bảo rằng setCartItems được truyền từ component cha
}) => {
  const [showToast, setShowToast] = useState(false); // State để quản lý việc hiển thị toast

  // Tính tổng giá tiền
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Hàm xử lý khi nhấn "Purchase"
  const handlePurchase = () => {
    setShowToast(true); // Hiện toast thông báo
    handleClose(); // Đóng modal
    setCartItems([]); // Xóa tất cả items trong giỏ hàng
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
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
              ))}
              {/* Thẻ div hiển thị tổng giá tiền */}
              <div className="mt-3">
                <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
              </div>
            </>
          ) : (
            <p>No items in cart.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handlePurchase}>
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast thông báo */}
      <Toast
        style={{ position: 'absolute', top: '20px', right: '20px',  backgroundColor: '#28a745', color: 'white' }} // Vị trí của toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Thông báo</strong>
        </Toast.Header>
        <Toast.Body>Đặt hàng thành công!</Toast.Body>
      </Toast>
    </>
  );
};

export default CartPopupComponent;

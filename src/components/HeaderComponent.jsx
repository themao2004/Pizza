import React, { useState } from "react";
import "../style/HeaderComponent.scss";
import { Modal, Button, Form } from "react-bootstrap"; 
import { ToastContainer, Toast } from "react-bootstrap"; // Import Toast từ react-bootstrap

const HeaderComponent = ({ cartItems, openCart }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // State để quản lý việc hiển thị modal và trạng thái đăng nhập
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State quản lý trạng thái đăng nhập
  const [showToast, setShowToast] = useState(false); // State để quản lý việc hiển thị toast

  // Hàm mở modal
  const handleShow = () => setShowLoginModal(true);
  // Hàm đóng modal
  const handleClose = () => setShowLoginModal(false);

  // Hàm xử lý đăng nhập
  const handleLoginSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    // Xử lý đăng nhập (có thể kiểm tra thông tin đăng nhập ở đây)
    setIsLoggedIn(true); // Đánh dấu đã đăng nhập
    setShowToast(true); // Hiển thị toast thông báo đăng nhập thành công
    handleClose(); // Đóng modal
  };

  // Hàm xử lý logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Đánh dấu đã đăng xuất
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container px-5">
            <h2 className="navbar-brand fs-3 fw-normal align-self-center mb-0">
              Pizza House
            </h2>

            <div className="ms-auto d-flex align-items-center">
              <button className="btn btn-danger" onClick={openCart}>
                Cart ({totalItems})
              </button>
              {/* Thay đổi button theo trạng thái đăng nhập */}
              {isLoggedIn ? (
                <Button className="btn btn-secondary ms-2" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Button className="btn btn-secondary ms-2" onClick={handleShow}>
                  Login
                </Button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Modal Login */}
      <Modal show={showLoginModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng Nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Nhập email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mật Khẩu</Form.Label>
              <Form.Control type="password" placeholder="Nhập mật khẩu" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Đăng Nhập
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Toast thông báo đăng nhập thành công */}
      <ToastContainer position="top-end" className="p-3">
      <Toast
  style={{ backgroundColor: '#28a745', color: 'white' }} // Màu nền xanh lá
  onClose={() => setShowToast(false)}
  show={showToast}
  delay={3000}
  autohide
>
  <Toast.Header style={{ backgroundColor: '#28a745', color: 'white' }}>
    <strong className="me-auto">Thông báo</strong>
  </Toast.Header>
  <Toast.Body style={{ backgroundColor: '#28a745', color: 'white' }}>
    Đăng nhập thành công!
  </Toast.Body>
</Toast>

      </ToastContainer>
    </>
  );
};

export default HeaderComponent;

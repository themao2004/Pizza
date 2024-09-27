
const HeaderComponent = () => {
  return (
    <>
     <header>
    <nav className="navbar navbar-expand-lg  vghh navbar-dark">
      <div className="container px-5 ">
        <h2 className="navbar-brand fs-3 fw-normal align-self-center mb-0" href="#">Pizza House</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center mx-4" id="navbarNav">
          <ul className="navbar-nav me-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-danger" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
    </>
  );
};

export default HeaderComponent;
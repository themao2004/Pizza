const MenuItem = ({ items = [] }) => {
  return (
    <>
      {items.map((item) => (
        <div className="col-md-3" key={item.id}>
          <div className="card h-100">
            <div className="image-container">
              <img src={item.image} className="card-img-top" alt={item.title} />
              {item.badge && <span className="badge-sell">{item.badge}</span>}
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                {item.originalPrice && <del>${item.originalPrice}</del>} $
                {item.price}
              </p>
              <button className="btn btn-warning full-width bg-black text-white">
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuItem;

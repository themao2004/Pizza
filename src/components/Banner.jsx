
const BannerComponent = () => {
    return <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

<div className="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./imges/pizza1.jpg" className="d-block w-100" alt="Pizza 1"/>
      <div className="carousel-caption d-none d-md-block">
        <h3>Neapolitan Pizza</h3>
        <p>If you're looking for traditional Italian pizza, the Neapolitan is the best option!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./imges/pizza2.jpg" className="d-block w-100" alt="Pizza 2"/>
      <div className="carousel-caption d-none d-md-block">
        <h3>Cheese Pizza</h3>
        <p>Cheese lovers, this is for you!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./imges/pizza3.jpg" className="d-block w-100" alt="Pizza 3"/>
      <div className="carousel-caption text-black d-none d-md-block">
        <h3>Pepperoni Pizza</h3>
        <p>For those who love a bit of spice!</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
}

export default BannerComponent;
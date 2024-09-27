const FormComponent = () => {
    return <>
    
  {/* //ok Your Table */}
  <section className="bg-dark text-white py-5">
    <div className="container">
      <h2 className="text-center mb-4">Book Your Table</h2>
      <div className="row justify-content-center mx-4">
        <form>
          <div className="row mb-3">
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Your Name *"/>
            </div>
            <div className="col-md-4">
              <input type="email" className="form-control" placeholder="Your Email *"/>
            </div>
            <div className="col-md-4">
              <select className="form-control">
                <option>Select a Service</option>
                <option>Dine In</option>
                <option>Takeaway</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Please write your comment" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-warning w-20 s-m">Send Message</button>
        </form>
      </div>
    </div>
  </section>
    </>
}

export default FormComponent;
import { Container } from 'react-bootstrap';
function View(){

return(
    <Container>  
  <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
        <div className="col">
          <div className="card mb-3 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Track without signup</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">Track now</h1>
              <h2>Search by Document Number</h2>
              <ul className="list mt-3 mb-4">
               
                <li>Adhar card</li>
                <li>Pan card</li>
                <li>Mobile Number</li>
                <li>eTrack number</li>
              </ul>
                <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-3 p-md-5 border rounded-3 bg-light">
        <h3 className='pt-0'>For Office Use</h3>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        </form>
      </div>
        
      </div>
    </Container>
)
}
export default View;
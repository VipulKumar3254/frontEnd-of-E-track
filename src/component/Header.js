import {Container} from 'react-bootstrap';
import etrack from './etrack.png';
function Header(){

    return(

        <Container>
        <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
              <img src={etrack} width="150px"></img>
            <span className="fs-4">eTRACK DOCUMENT</span>
          </a>
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="me-3 py-2 text-dark text-decoration-none" href="#">About eTrack</a>
            <a className="me-3 py-2 text-dark text-decoration-none" href="#">Modisarkar.com</a>
          </nav>
        </div>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Track Your Document</h1>
          <p className="fs-5 text-muted"> An integrated/centralized web-based system for tracking and managing office document of different department. </p>
        </div>
      </header>

        </Container>
    );
}
export default Header;
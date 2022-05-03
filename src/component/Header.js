import {Container} from 'react-bootstrap';
import etrack from './etrack.png';
function Header(props){
    return(

        <Container>
        <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
              <img src={etrack} width="150px"></img>
            <span className="fs-4">eTRACK {props.name}</span>
          </a>
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="me-3 py-2 text-dark text-decoration-none" href="#">About eTrack</a>
            <a className="me-3 py-2 text-dark text-decoration-none" href={props.link}>{props.procs}</a>
          </nav>
        </div>
      </header>

        </Container>
    );
}
export default Header;
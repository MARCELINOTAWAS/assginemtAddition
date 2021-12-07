import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {CardProduct,Menu} from './components'

function App() {
  return (
    <div className="container pt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded p-3 d-flex justify-content-between">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ALL TYPES
        </a>
        <Menu/>
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          PRICE
        </a>
      </nav>
      <div className="row mt-5">
        <div className="col-12 d-flex justify-content-between">
          <CardProduct img="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/288/0728848_PE736539_S4.jpg"
            title="HEMLINGBY"
            price="Rp.12.350.000"/>
          <CardProduct img="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/929/0992909_PE820327_S4.jpg"
            title="ÄPPLARYD"
            price="Rp.7.000.000"/>
          <CardProduct img="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/837/0183763_PE334809_S4.jpg"
            title="STOCKHOLM"
            price="Rp.3.437.000"/>
        </div>
      </div>
    </div>
  );
}

export default App;

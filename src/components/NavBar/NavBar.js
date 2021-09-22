 import './NavBar.css';
import Logo from '../CartWidget/cartWidget'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import '../CartWidget/cartWidget.css'
import Count from '../Count';

const NavBar = () => {
  
    
    return(
        <nav className="navbar navbar-pills navbar-light bg-light h-25">
        <div className="container-fluid ">
        <Logo/>
        <a className="navbar-brand ">
          <img src='img/cart-dash.svg' alt = "carrito" width="50"  height="50"></img>
          <Count />
        </a>  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="">Televisores</a></li>
            <li><a className="dropdown-item" href="">Celulares</a></li>
            <li><a className="dropdown-item" href="">Lavarropas</a></li>
            <li><a className="dropdown-item" href="">Heladeras</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;
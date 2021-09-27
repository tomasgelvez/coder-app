import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../CartWidget/cartWidget.css'
import {Link, NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/cartWidget';


const NavBar = ({categorias}) => {

    return(
        <nav className="navbar navbar-pills navbar-light bg-light h-25">
        <div className="container-fluid ">
          <img src="../img/logo.png" style={{width:'300px'}} alt=""></img>
        <a className="navbar-brand" >
        <Link to='/cart'>
          <CartWidget  />
        </Link>
         
          
        </a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link" activeclassname="active" aria-current="page">  Inicio </Link>
        </li>
        <li className="nav-item">
        <NavLink to={"/About"} className="nav-link"  activeclassname="active" aria-current="page">  About </NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" activeclassname="active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {categorias.map(categoria => <NavLink key={categoria.id} to={`/category/${categoria.name}`} className="dropdown-item">{categoria.name}</NavLink>)}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;
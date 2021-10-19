import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../CartWidget/cartWidget.css'
import {Link, NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/cartWidget';
import { useContext } from 'react/cjs/react.development';
import CartContext from '../../context/CartContex';
import UserContext from '../../context/UserContext'



const NavBar = ({categorias}) => {
    const {getQuantity} = useContext(CartContext)
    const {user, logout} = useContext(UserContext)
console.log(user)
    const handleLogout = () => {
      logout()
      console.log('error', `Hasta luego ${user}`)
    }

    return(
        <nav className="navbar navbar-pills navbar-light bg-light h-25">
        <div className="container-fluid ">
          <Link to='/'>
          <img src="../img/logo.jpg" style={{width:'100px'}} alt=""></img>
          </Link>
          
          <div>
        {
          user 
            ? <button onClick={handleLogout}>Logout</button>
            : <Link to='/login'><button>Login</button></Link>
        }
      </div>
      <div>
        {
        (user && getQuantity() > 0) &&
          <Link to='/cart'>
            <CartWidget />
          </Link>
        }
      </div>

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
          <ul className="nav-item dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
                {categorias.map(categoria => <NavLink key={categoria.id} to={`/category/${categoria.title}`} className="dropdown-item">{categoria.name}</NavLink>)}
            </li>
          </ul>

        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;
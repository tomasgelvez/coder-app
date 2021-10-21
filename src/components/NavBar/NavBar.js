import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../CartWidget/cartWidget.css'
import {Link, NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/cartWidget';
import { useContext } from 'react/cjs/react.development';
import { useEffect,useState } from 'react';
import CartContext from '../../context/CartContex';
import UserContext from '../../context/UserContext'
import { getCategories } from '../../Services/firebase/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    const {getQuantity} = useContext(CartContext)
    const {user, logout} = useContext(UserContext)
    const [categories, setCategories] = useState()




    useEffect(() => {
      getCategories().then(categories => {
        setCategories(categories)
      }).catch((error) => {
        console.log(error)
      })
      return () => {
        setCategories()
      }
    }, [])

    const handleLogout = () => {
      logout()
      console.log('error', `Hasta luego ${user}`)
    }

    return(
<nav className="NavBar">
      <div>
      <Link to='/'>
          <img src="../img/logo.jpg" style={{width:'100px'}} alt=""></img>
      </Link>
      </div>
      <Link to='/'>
      <div className="productsAll">
        <div className='Option' activeClassName="NavLink">Productos</div>
      </div>
      </Link>
      <div className="Categories">
        {categories?.map(category => <NavLink key={category.id} to={`/category/${category.id}`} className='Option' activeClassName="NavLink">{category.description}</NavLink>)}     
      </div>
      <div>
        {
          user 
            ? <button onClick={handleLogout} className='btn btn-danger'>Exit</button>
            : <Link to='/login'><button className='btn btn-primary'>Login</button></Link>
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

    </nav>
    )
}

export default NavBar;
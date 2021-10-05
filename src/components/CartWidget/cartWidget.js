
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContex';
import './cartWidget.css'

//Aca es donde creo el carrito de compras


const CartWidget = () => {
    const {getQuantity} = useContext(CartContext)
    return(
        <Link to={`/cart`} className="btn">
           <img src='../img/cart-dash.svg' alt = "carrito" width="50"  height="50"></img>

            {getQuantity()}
        </Link>
    
    );
}

export default CartWidget;






import './cartWidget.css'
import { Link } from 'react-router-dom';




const CartWidget = (props) => {
    /* const {cartQuantity} = useContext(CartContext) */
    return(
        <Link to={`/cart`} className="btn">
           <img src='../img/cart-dash.svg' alt = "carrito" width="50"  height="50"></img>
           {/* <p>{ cartQuantity } </p>    */}
            {props.quantity}
        </Link>
  
    );
}

export default CartWidget;





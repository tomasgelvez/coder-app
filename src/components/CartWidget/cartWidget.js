
import './cartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/cartContext';


/* const CartWidget = (props) => {
    return(
        <div>
            <a href="/">

                <img src='../img/cart-dash.svg' alt = "carrito" width="50"  height="50"></img>
                

            </a>
                <button type="button" className="badge bg-light text-dark d-flex p-2 bd-highlight ">
            Productos <span className="badge bg-secondary">0</span>
                    </button>
                </div>
    )
} */
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





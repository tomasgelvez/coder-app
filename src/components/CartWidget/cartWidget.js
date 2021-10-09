import { useContext } from 'react';
import CartContext from '../../context/CartContex';
import './cartWidget.css'

//Aca es donde creo el carrito de compras


const CartWidget = () => {
    const {getQuantity} = useContext(CartContext)
    return(
        <button>
           <img src='../img/cart-dash.svg' alt = "carrito" width="50"  height="50"></img>

            {getQuantity()}
        </button>
    
    );
}

export default CartWidget;





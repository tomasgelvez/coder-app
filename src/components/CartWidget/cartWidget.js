
import './cartWidget.css'


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
    return(
        <button >
           <img src='../img/cart-dash.svg' alt = "carrito" width="50"  height="50"></img>
                
            {props.quantity}
        </button>
  
    );
}

export default CartWidget;
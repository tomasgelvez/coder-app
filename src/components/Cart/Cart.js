import CartContext from "../../context/CartContex"
import { useContext } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



//Aca creo el componente Cart

const Cart = () => {
    

    /* const [total, setTotal] = useState()  */
    const { products,removeItem } = useContext(CartContext)

//Aca muestro el total
/*      useEffect(() => {
        setTotal(getTotal())
    }, [getTotal])
 */

//Aca dibujo la cart, con su respectiva informacion(id,precio, cantidad,nombre e img)
    return (

    <div>
        {products.map(product =>{
            return(
                <div className="container">
                    <div className="row">
                        <div className="card d-flex text-aling-center" id={product.id} style={{width: "18rem"}}>
                            <img className="card-img-top" src={product.imagen} alt={product.title}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> {product.price}</li>
                                        <li className="list-group-item">Stock: {product.stock}</li>
                                        <li className="list-group-item">Cantidad elegida: {product.quantity}</li>

                                    </ul>
                                        <div className="card-body p-3">
                                            <button href="#" className="btn btn-dark ">Comprar</button>
                                            <button href="#" className="btn btn-dark" function = {() => removeItem (product?.id, product?.price, product.quantity)} >X</button>
                                        </div>
                        </div>
                    </div>
                </div>
            )

        })

        }

    </div>

    )
}

export default Cart





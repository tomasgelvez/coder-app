import ItemList from "../itemList/ItemList"
import CartContext from "../../context/CartContex"
import { useContext, useEffect,useState } from "react"


//Aca creo el componente Cart

const Cart = ({products}) => {
    console.log(products)

/*     const [total, setTotal] = useState() */
    const { removeItem } = useContext(CartContext)

//Aca muestro el total
    /* useEffect(() => {
        setTotal(getTotal())
    }, [getTotal]) */


//Aca dibujo la cart, con su respectiva informacion(id,precio, cantidad,nombre e img)
    return (

    <div>

        <div >
            <div id={products?.id}>
            <div >
                <img src={products?.imagen} alt={products?.name}/>
            </div>
                <div >

                    <div >
                        <p>{products?.name}</p>
                    </div>
                </div>
                    <div >
                        <div >
                            <p>Precio : {products?.price}</p>
                        </div>

                        <button function={()=>removeItem(products?.id, products?.price, products?.quantity)}>X</button>
                    </div>
                    <div >
                        <p>Cantidad a comprar : {products?.quantity}</p>
                    </div>
                    <div >
                        <p> </p>
                    </div>
                    </div>
    </div>

</div>

    )
}

export default Cart
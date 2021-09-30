import ItemList from "../itemList/ItemList"
import CartContext from "../../context/CartContex"
import { useContext, useEffect,useState } from "react"



const Cart = () => {
    const [total, setTotal] = useState()

    const { products, clearCart, getTotal } = useContext(CartContext)


    useEffect(() => {
        setTotal(getTotal())
    }, [getTotal])


    return (
    <div>
        <h1>Se agrego un producto</h1>
        <button  className="Button">Cancelar compra</button>
        <ItemList products={products} />

    </div>
    )
}

export default Cart
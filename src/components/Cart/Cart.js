import ItemList from "../itemList/ItemList"
import CartContext from "../../context/CartContex"
import { useContext, useEffect,useState } from "react"



const Cart = ({item}) => {
    console.log(item)
    
    const [total, setTotal] = useState()
    
    const { getTotal,removeItem,addItem } = useContext(CartContext)
    
    useEffect(() => {
        setTotal(getTotal())
    }, [getTotal])

    
debugger
    return (

    <div className="contenedorItem" id={item?.id}>
        
        <div className="contenedorItemContenido">
            <div className="contenedorItemContenidoImg">
                <img src={item?.imagen} alt={item?.name}/>
            </div>
                <div className="contenedorItemContenidoDetalles">
                    <div className="contenedorItemTitulo">
                        <p>{item?.name}</p>
                    </div>
                </div>
                    <div className="contenedorItemDetail">
                        <div className="contenedorItemDetailPrecio">
                            <p>Precio : {item?.price}</p>
                        </div>
                        
                        <button className="btn btn-warning" function={()=>removeItem(item?.id, item?.price, item?.quantity)} label="Sacar">X</button>
                    </div>
                    <div className="contenedorItemStock">
                        <p>Cantidad a comprar : {item?.quantity}</p>
                    </div>
    </div>
</div>
    
    )
}

export default Cart
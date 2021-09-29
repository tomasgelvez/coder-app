import ItemList from "../itemList/ItemList"



const Cart = ({ productsAdded, addProdFunction }) => {
   
    return (
    <div>
        <h1>Se agrego un producto</h1>
        <button onClick={() => addProdFunction([])} className="Button">Cancelar compra</button>
        <ItemList products={productsAdded} />

    </div>
    )
}

export default Cart
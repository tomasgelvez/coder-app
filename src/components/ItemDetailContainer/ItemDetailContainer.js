import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from '../../Services/fireBase/firebase'



//Comienza el componente
function ItemDetailContainer({productsAdded,addProdFunction}) {
    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(itemid).then(product => {
            setProduct(product)
        }).catch((error) => {
            console.log("hay error", error)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setLoading(true)
            setProduct(undefined)
        })
    },[itemid])


//Aca le paso a itemDetail las props.
    return (
        <>
            {loading ? "Cargando.." : <ItemDetail products={product} itemid={itemid} productsAdded={productsAdded} addProdFunction={addProdFunction}/>}
        </>
    );
}




export default ItemDetailContainer
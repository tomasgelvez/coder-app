import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from '../../Services/fireBase/firebase.js'
import { doc,getDoc } from 'firebase/firestore'


//Comienza el componente
function ItemDetailContainer({productsAdded,addProdFunction}) {
    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams()

console.log(product)
    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, 'items' , itemid)).then((querySnapshot) => {
        console.log({id: querySnapshot.id, ...querySnapshot.data()})
        const product = {id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(product)
    }).catch((error) =>{
        console.log('error searching items', error)
    }).finally(() => {
        setLoading(false)
    })
    return (() => {
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
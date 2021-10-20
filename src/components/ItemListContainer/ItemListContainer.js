import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from '../itemList/ItemList'
import { getProducts } from "../../Services/firebase/firebase";


const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])
    const {categoryid} = useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        getProducts('category', '==', categoryid).then(products => {
            setProducts(products)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setLoading(true)
            setProducts([])
        })
    }, [categoryid])

    return (
        <div className="ItemListContainer" >
             { loading ? "Cargando..." : <ItemList products={products}/> }
        </div>
    )    
    
}

export default ItemListContainer
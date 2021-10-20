import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from '../itemList/ItemList'
import { getProducts } from "../../Services/firebase/firebase";
import Carrousel from "../Carrousel/Carrousel";

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
        <>
        
        <div className="parrafo--products">
            {<h4>Consegui tus productos en linea</h4>}
        </div>
        <div className="ItemListContainer" >
             { loading ? "Cargando..." : <ItemList products={products}/> }
        </div>
        </>
    )    
    
}

export default ItemListContainer
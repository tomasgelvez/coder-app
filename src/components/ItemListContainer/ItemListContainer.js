import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from '../itemList/ItemList'
import { db } from "../../Services/firebase/firebase";
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])
    const {categoryid} = useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if(!categoryid) {
            setLoading(true)
            getDocs(collection(db, 'items')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching intems', error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)
            getDocs(query(collection(db, 'items'), where('category', '==', categoryid))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching items', error)
            }).finally(() => {
                setLoading(false)
            })
        }
        
        return (() => {
            setLoading(true)
            setProducts([])
        })
    }, [categoryid])

    return (
        <div className="ItemListContainer" >
             { loading ? "Cargando.." : <ItemList products={products}/> }
        </div>
    )    
    
}

export default ItemListContainer
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../Services/firebase/firebase'

const ItemDetailContainer = ({ productsAdded, addProdFunction }) => {
    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams()

    
    useEffect(() => {
        setLoading(true)
        getProductById(itemid).then(product => {
            setProduct(product)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setLoading(true)
            setProduct(undefined)
        })
    },[itemid])

    return (
        <div className='ItemDetailContainer' >
            {loading ? "Cargando.." : <ItemDetail product={product} itemid={itemid} productsAdded={productsAdded} addProdFunction={addProdFunction}/>}    
        </div>
    )
}
export default ItemDetailContainer
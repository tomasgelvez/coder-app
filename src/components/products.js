import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Products = () => {
    const [count, setCount] = useState(0)
    const myFuncionBuy = () => {
        if(count === 25){
            console.log('No puedo sumar mas')
        }else{
            setCount(count + 1)
        }
    }

    const myFuncionDelete = () => {
        if(count <= 0){
            console.log('No puedo restar mas')
        }else{
            setCount(count - 1)
        }
    }



    return(
        <>
        <h1>{count}</h1>
        <button type="button" className="btn btn-success" onClick={myFuncionBuy}>Buy</button>
        <button type="button" className="btn btn-danger" onClick={myFuncionDelete}>Remove</button>
        </>
    
    )
}


export default Products;
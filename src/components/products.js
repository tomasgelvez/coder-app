import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import televisor from "../components/Assets/img/televisor1.jpg";
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
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={televisor} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">Televisor LG LED 43'' </h5>
                <p className="card-text">Disfrutá en Full HD
El Smart TV 43 pulgadas LG 43LM6350 cuenta con una pantalla de visualización LED de formato widescreen (16:9) y resolución Full HD 1920x1080.</p>
                <button type="button" className="btn btn-success" onClick={myFuncionBuy}>Buy</button>
                <button type="button" className="btn btn-danger" onClick={myFuncionDelete}>Remove</button>
            </div>
        </div>
        </>
    
    )
}


export default Products;
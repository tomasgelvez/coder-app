import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";




const Item = ({producto}) => {
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
        


        <div className="card" id={producto.id} style={{width:' 18rem', padding: '4px'}}>
            <img className="card-img-top" src={producto.imagen} alt="foto"></img>
            <div className="card-body">
            <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{producto.stock}</li>
                <li className="list-group-item">{producto.price}</li>
                <li className="list-group-item">{count}</li>
            </ul>
            <button type="button" className="btn btn-success" onClick={myFuncionBuy}>Buy</button>
        <button type="button" className="btn btn-danger" onClick={myFuncionDelete}>Remove</button>

        </div>
        
        )
}


export default Item
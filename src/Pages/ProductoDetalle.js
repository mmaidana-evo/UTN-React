import React,{useState,useEffect} from "react";
import {getProducto} from "../Services/ServiceProductos";
import Button from 'react-bootstrap/Button';

function ProductoDetalle(props){    
    const [producto,setProducto] = useState({})

    useEffect(
        ()=>{
            getProducto(props.match.params.id)
            .then((data)=>{
                // console.log('Resp. getProducto: ',data.data[0]);
                setProducto(data.data[0])
            })
        },[]
    )
   
    return(
        <>
        <legend><span class="balloon">!</span> {producto.name}</legend>
        <main>
            <p>{producto.description}</p>
            <div style={{textAlign:"right"}}>Precio: $ {producto.price}</div>
            <Button variant="primary">Comprar</Button>
        </main>
        </>
    )
}

export default ProductoDetalle;
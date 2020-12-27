import React,{useState,useEffect} from "react";
import {getProducto} from "../Services/ServiceProductos";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function ProductoDetalle(props){    
    const [loading,setLoading] = useState(true);
    const [producto,setProducto] = useState({})

    useEffect(
        ()=>{
            getProducto(props.match.params.id)
            .then((data)=>{
                // console.log('Resp. getProducto: ',data.data[0]);
                setLoading(false);
                setProducto(data.data[0])
            })
        },[]
    )
   
    if(loading){
        return(
            <div style={{textAlign:"center"}}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        )
    }else{        
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
}

export default ProductoDetalle;
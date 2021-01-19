import React,{useState,useEffect} from "react";
// import {getProducto} from "../Services/ServiceProductos";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import firebase from "../Config/Firebase";
import {useHistory} from "react-router-dom";
import {Link} from 'react-router-dom';
import NetContext from "../Context/NetContext";

function ProductoDetalle(props){    
    const [loading,setLoading] = useState(true);
    const [producto,setProducto] = useState({});
    const history = useHistory();

    useEffect(
        ()=>{
            // getProducto(props.match.params.id)
            // .then((data)=>{
            //     // console.log('Resp. getProducto: ',data.data[0]);
            //     setLoading(false);
            //     setProducto(data.data[0])
            // })
            firebase.db.doc("productos/"+props.match.params.id)
            .get()
            .then(data=>{
                // console.log(data.data());
                setLoading(false);
                setProducto(data.data());
            })
        },[]
    )

    const handleDelete = (e)=>{
        const id = props.match.params.id;
        console.log("Eliminar",id)
        firebase.db.doc("productos/"+id)
        .delete()
        .then(doc=>{
            // console.log(doc);
            history.push("/");
        })
    }
   
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
            <NetContext.Consumer>
                {
                    context=>
                    <>
                    <legend><span className="balloon">!</span> {producto.name}</legend>
                    <main>
                        <p  style={{textAlign:"justify"}}>{producto.description}</p>
                        <div style={{textAlign:"left"}}>SKU: {props.match.params.id}</div>
                        <div style={{textAlign:"right", fontSize:"calc(20px + 2vmin)"}}><strong>Precio: ${producto.price}</strong></div>
                        <div style={{marginTop:"10px"}}></div>
                        <Button variant="primary">Agregar al Carrito</Button>
                        <span style={{float:"right"}}>
                            {
                                context.userlogin &&
                                    <>
                                    <Link to={"/productos/editar/"+props.match.params.id}>
                                        <Button variant="primary" style={{marginRight:"10px"}}>Editar</Button>
                                    </Link>
                                    <Button variant="primary" onClick={handleDelete}>Eliminar</Button>
                                    </>
                            }
                        </span>
                    </main>
                    </>
                }
            </NetContext.Consumer>
            </>      
        )
    }
}

export default ProductoDetalle;
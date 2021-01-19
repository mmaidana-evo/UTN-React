import React,{useState,useEffect} from "react";
import Productos from "../Components/Productos";
import {getProductos} from "../Services/ServiceProductos";
import Spinner from 'react-bootstrap/Spinner';
import firebase from "../Config/Firebase";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NetContext from "../Context/NetContext";

function Home(){

    const [loading,setLoading] = useState(true);
    const [productList,setProductos] = useState([]);

    useEffect(
        ()=>{
            // getProductos()
            // .then((data)=>{
            //     // console.log('Resp. getProductos: ',data.data);
            //     setLoading(false);
            //     setProductos(data.data);
            // })
            firebase.db.collection("productos")
            .get()
            .then(data=>{
                setLoading(false);
                setProductos(data.docs);
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
            <NetContext.Consumer>
                {
                    context=>
                        <>
                        <legend><span className="balloon">!</span> Home</legend>
                        <main>
                            {productList.map((prodLi)=><Productos key={prodLi.id} productos={prodLi}/>)}
                            <span style={{float:"right",marginTop:"10px"}}>
                                {
                                    context.userlogin &&
                                        <>
                                        <Link to={"/producto/alta"}>
                                            <Button variant="primary">Alta de Producto</Button>
                                        </Link>
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

export default Home;
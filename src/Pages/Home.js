import React,{useState,useEffect} from "react";
import Productos from "../Components/Productos";
import {getProductos} from "../Services/ServiceProductos";
import Spinner from 'react-bootstrap/Spinner';

function Home(){

    const [loading,setLoading] = useState(true);
    const [productList,setProductos] = useState([]);

    useEffect(
        ()=>{
            getProductos()
            .then((data)=>{
                // console.log('Resp. getProductos: ',data.data);
                setLoading(false);
                setProductos(data.data);
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
            <legend><span className="balloon">!</span> Home</legend>
            <main>
                {productList.map((prodLi)=><Productos key={prodLi.id} productos={prodLi}/>)}
            </main>
            </>
        )
    }
}

export default Home;
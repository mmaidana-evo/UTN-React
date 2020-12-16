import React,{useState} from "react";
import {BrowserRouter} from "react-router-dom";

import Layout from './Template/Layout';

function App() {
  const [opciones,setOpciones] = useState([
    {
      path:"/",
      label:"Home"
    },
    {
      path:"/login",
      label:"Login"
    },
    {
      path:"/registro",
      label:"Registro"
    }
  ])

  const handleClick = ()=>{
    setOpciones(
      [
        {
          path:"/",
          label:"Home"
        }
      ]
    )
  }

  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;

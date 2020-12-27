import React,{useState} from "react";
import {BrowserRouter} from "react-router-dom";

import LayoutHead from './Template/LayoutHead';
import Menu from './Components/Menu/index';
import RoutesWeb from "./Components/Menu/RoutesWeb";


function App() {
  const [opciones,setOpciones] = useState([
    {path:"/", label:"Home"},
    {path:"/login", label:"Login"},
    {path:"/registro", label:"Registro"}
  ])

  const handleClick = ()=>{
    setOpciones([
      {path:"/", label:"Home"}
    ])
  }

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <LayoutHead/>
            <Menu data={opciones}/>
            <div className="formStyle">
              <fieldset>
                <RoutesWeb/>
              </fieldset>
            </div>
          </header>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

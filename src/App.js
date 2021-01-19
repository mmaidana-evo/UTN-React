import React,{useState} from "react";
import {BrowserRouter} from "react-router-dom";

import LayoutHead from './Template/LayoutHead';
import Menu from './Components/Menu/index';
import RoutesWeb from "./Components/Menu/RoutesWeb";
import GlobalState from "./Context/GlobalState";


function App() {
  const [opciones,setOpciones] = useState([
    {path:"/", label:"Home", viewlogin:"H"},
    {path:"/login", label:"Login", viewlogin:"N"},
    {path:"/registro", label:"Registro", viewlogin:"N"}
  ])

  const handleClick = ()=>{
    setOpciones([
      {path:"/", label:"Home"}
    ])
  }

  return (
    <>
      <GlobalState>
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
      </GlobalState>
    </>
  );
}

export default App;

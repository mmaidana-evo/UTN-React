import React from "react";
import OptionMenu from "./OptionsMenu";
import {Navbar,Nav} from 'react-bootstrap';
function Menu(props){
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">TP02</Navbar.Brand>
            <Nav className="mr-auto">
                {props.data.map(opcion=><OptionMenu opcion={opcion}/>)}
            </Nav>
        </Navbar>
        </>        
    )
}

export default Menu;
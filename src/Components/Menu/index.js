import React from "react";
import OptionMenu from "./OptionsMenu";
import {Navbar,Nav} from 'react-bootstrap';
import NetContext from "../../Context/NetContext";

function Menu(props){
    return(
        <>
        <NetContext.Consumer>
            {
                context=>
                    <>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">TP03</Navbar.Brand>
                        <Nav className="mr-auto">
                            {props.data.map(opcion=>
                                // <OptionMenu key={opcion.path} opcion={opcion}/>
                                {
                                    if(context.userlogin == true && opcion.viewlogin == 'S'){
                                        return <OptionMenu key={opcion.path} opcion={opcion}/>
                                    }
                                    if(context.userlogin != true && opcion.viewlogin == 'N'){
                                        return <OptionMenu key={opcion.path} opcion={opcion}/>
                                    }
                                    if(opcion.viewlogin == 'H'){
                                        return <OptionMenu key={opcion.path} opcion={opcion}/>
                                    }
                                }
                            )}
                            {
                                context.userlogin &&
                                    <>
                                    <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar>
                    </>  
            }
        </NetContext.Consumer>
        </>        
    )
}

export default Menu;
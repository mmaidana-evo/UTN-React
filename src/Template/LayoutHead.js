import "./Layout.css";
import logo from '../logo.svg';
import NetContext from "../Context/NetContext";

function LayoutHead(){
    return(
        <>
        <NetContext.Consumer>
            {
                context=>
                <>
                <div className="headerStyle">
                    <div className="columnLeft">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="columnRight tblPadre">
                        <div className="tblHijo">
                            Desarrollo en React .JS
                            <br></br>
                            T.P. Final
                            {
                                context.userlogin &&
                                    <>
                                    <br></br>
                                    <a>{context.username}</a>
                                    </>
                            }
                        </div>              
                    </div>
                </div>
                </>
            }
        </NetContext.Consumer>
        </>    
    )
}

export default LayoutHead;
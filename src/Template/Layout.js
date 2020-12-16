import "./Layout.css";
import logo from '../logo.svg';

function Layout(){
    return(
        <>
        <div className="App">
            <header className="App-header">
                <div className="headerStyle">
                    <div className="columnLeft">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="columnRight tblPadre">
                        <div className="tblHijo">
                            Desarrollo en React .JS
                            <br></br>
                            T.P. Modulo N°2
                        </div>              
                    </div>
                </div>
  
                <div className="formStyle">
                    <fieldset>
                        <legend><span class="balloon">!</span> Titulo</legend>
                        <main>Contenido</main>
                    </fieldset>
                </div>
            </header>
        </div>
        </>
    )
}

export default Layout;
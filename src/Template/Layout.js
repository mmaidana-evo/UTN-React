import "./Layout.css";

function Layout(){
    return(
        <>
        <section id="cover" className="min-vh-100">
            <div id="cover-caption">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center p-4">
                            <h1 className="display-6 py-2 text-truncate">Curso de React JS.</h1>
                            <div className="px-2">
                                <span id="content"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Layout;
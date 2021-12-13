
export const Sidebar = ({ onOptionClicked }) => {
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-auto col-xl-auto px-sm-1">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-3 min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-4 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-3 d-none d-sm-inline">Cultivarte</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item" >
                            <a href="#Inicio" name="inicio" onClick={onOptionClicked} className="nav-link fuenteMenu align-middle px-0">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#AdminUsuarios" name="admin" onClick={onOptionClicked} data-bs-toggle="collapse" className="fuenteMenu  nav-link px-0 align-middle">
                                Administración Usuarios
                            </a>
                            
                        </li>
                        <li>
                            <a href="#Predios" name="predios" onClick={onOptionClicked} data-bs-toggle="collapse" className="nav-link fuenteMenu px-0 align-middle">
                                Predios 
                            </a>
                            
                        </li>
                        <li>
                            <a href="#TiposCultivo" name="tiposc" onClick={onOptionClicked} className="nav-link fuenteMenu px-0 align-middle">
                                Tipos de cultivo
                            </a>
                        </li>
                        <li>
                            <a href="#InsumosValor" name="insumosv" onClick={onOptionClicked} data-bs-toggle="collapse" className="nav-link fuenteMenu px-0 align-middle ">
                                Insumos
                            </a>
                    
                        </li>
                        <li>
                            <a href="#Cultivos" name="cultivos" onClick={onOptionClicked} data-bs-toggle="collapse" className="nav-link fuenteMenu px-0 align-middle">
                                Cultivos
                            </a>                      
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="side-menu-footer">
            <h6>Powered by We</h6>
        </div>
    </div>
    );
}   

export default Sidebar;
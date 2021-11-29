
export const Sidebar = ({ onOptionClicked }) => {
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-auto col-xl-auto px-sm-2 bg-light">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-4 mb-md-0 me-md-auto text-black text-decoration-none">
                        <span className="fs-4 d-none d-sm-inline">Cultivarte</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="#Inicio" name="inicio" onClick={onOptionClicked} className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Inicio</span>
                            </a>
                        </li>
                        <li>
                            <a href="#AdminUsuarios" name="admin" onClick={onOptionClicked} data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Administración Usuarios</span> 
                            </a>
                            
                        </li>
                        <li>
                            <a href="#Predios" name="predios" onClick={onOptionClicked} data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Predios</span> 
                            </a>
                            
                        </li>
                        <li>
                            <a href="#TiposCultivo" name="tiposc" onClick={onOptionClicked} className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Tipos de cultivo</span>
                            </a>
                        </li>
                        <li>
                            <a href="#InsumosValor" name="insumosv" onClick={onOptionClicked} data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Insumos</span>
                            </a>
                    
                        </li>
                        <li>
                            <a href="#Cultivos" name="cultivos" onClick={onOptionClicked} data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Cultivos</span> 
                            </a>                      
                        </li>
                    </ul>
                   
                </div>
            </div>
          
        </div>
    </div>
    );
}   

export default Sidebar;
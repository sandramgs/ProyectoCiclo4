function Header(){
    return(
       
            <nav className="main-header navvar navvar-expand navbar-white navbar-light"> 
                <button id="btnGroupDrop1" style={{paddingLeft: "92%"}} type="button" class="btn btn-primary dropdown-toggle" 
                data-bs-toggle="dropdown" aria-expanded="false">
                    Usuario
                </button>

                <ul className="dropdown-menu" style={{paddingLeft: "92%"}} aria-labelledby="btnGroupDrop1">
                    <li><a classNmae="dropdown-item" href="none">Perfil</a></li>
                    <li><a className="dropdown-item" href="none">hasta luego</a></li>
                </ul>
            </nav>
    
    );
}
export default Header;

function Login() {
    return (
    <div> 
        <section className="container-fluid">
            <div className="card mt-5"></div>
            <div className="card-body">
                <h3>Ya te extrañabamos ¡qué bueno tenerte por acá!</h3>
                <h5 className="text-muted">Inicia Sesión</h5>
            </div>
        </section>
        
        <section className="container-fluid">
    
            <div className="col">
                <div className="card-body">
                    <form>
                        <div className="mb-2">
                            <label for="exampleInputEmail1" className="form-label">Dirección de correo electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="col-12 mb-3 text-center">
                            <button id="btnLogin" type="button" className="btn btn-lg btn-primary">Ingresar</button>
                        </div>
                        <div className="card-footer mb-2 text-center">
                            <a href="none">¿Olvidaste la contraseña?</a> o <a href="none">¿Aún no te has registrado?</a>
                        </div>
                    </form>
                </div>
            </div>
            
        </section>
    </div>
    );
}
export default Login;



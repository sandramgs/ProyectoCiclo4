
function Login() {
    return (
    <div>       
        <section className="container-fluid">
            <div className="card mt-5"></div>
            <div className="card-body">
                <h3>Bienvenido a Cultivarte</h3>
                <h5 className="text-muted">Inicia Sesión</h5>
            </div>
        </section>
        <div className="w-50"  >
            <section className="container-fluid" >
                            
                <div className="col">
                    <div className="card-body">
                        <form>
                            <div className="mb-2">
                                <label htmlFor="exampleInputEmail1" className="form-label">Dirección de correo electrónico</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
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
    </div>
    );
}
export default Login;



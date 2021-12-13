import {Modal, Button} from "react-bootstrap";
import { useState } from 'react';

function UserGreeting(props) {
  return <h1>Que bueno verte de regreso!</h1>;
}

function GuestGreeting(props) {
  return <h1>Por favor iniciar sesión.</h1>;
}

function enFormulario(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


function FormPredios({title}){
    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
    return (
        <>    
            
            <div className="float-end mt-2">
                <Button variant="primary" onClick={handleShow}>
                    {title}
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Predios</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>                  
                  <div className="form-group">
                    <label>Código</label>
                    <input className="form-control"
                    />
                  </div>
                  <div className="form-group">
                      <label>Hectáreas</label>
                    <input className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Latitud</label>
                    <input className="form-control"
                    />
                  </div>
                  <div className="form-group">
                      <label>Longitud</label>
                    <input className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Descripción</label>
                    <input className="form-control"
                    />
                  </div>
                  <div className="form-group">
                      <label>Gestor</label>
                      <br/>                 
                    <select className="form-group">
                      <option value="A"></option>
                      <option value="B">Banana</option>
                      <option value="C">Cranberry</option>
                    </select>
                  </div>
                  
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Guardar
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      
    export default FormPredios;
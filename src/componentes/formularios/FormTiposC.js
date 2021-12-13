import {Modal, Button} from "react-bootstrap";
import { useState } from 'react';

function FormTiposC(){
    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
    return (
        <>    
            <div className="float-end mt-2">
                <Button variant="primary" onClick={handleShow}>
                    Nuevo
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Tipo de Cultivo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>                  
                  <div className="form-group">
                    <label>Descripción</label>
                    <input className="form-control"
                    />
                  </div>
                  <div className="form-group">
                      <label>Semilla</label>
                    <input className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Cantidad de semilla</label>
                    <input className="form-control" />
                  </div>
                  <div className="form-group">
                      <label>Fertilizante</label>
                    <input className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Cantidad de fertilizante</label>
                    <input className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Cantidad de agua</label>
                    <input className="form-control" />
                  </div>                 
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Agregar registro
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      
    export default FormTiposC;
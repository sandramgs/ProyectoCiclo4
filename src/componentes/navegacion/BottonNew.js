import {Modal, Button} from "react-bootstrap";
import { useState } from 'react';

function BottonNew(){
    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
    return (
        <>
            <div className="col-11"></div>
            <div className="col-1 mt-2">
                <Button variant="primary" onClick={handleShow}>
                    Nuevo
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Ventana emergente de Ejemplo</Modal.Title>
              </Modal.Header>
              <Modal.Body>Esta ventana modal hace parte de Cultivarte, aqui, en un futuro muy cercano irán los formularios para insertar nuevos registros según sea el caso: cultivos, tipos de cultivo y predios; a no ser que esa sea una mala idea y sea mejor hacerlo de otra forma.</Modal.Body>
              <Modal.Footer>
                <Button variant="emergy" onClick={handleClose}>
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
      
    export default BottonNew;
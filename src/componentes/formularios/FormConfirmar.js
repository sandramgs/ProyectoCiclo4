import { Button, Container, Modal } from "react-bootstrap";
import { useState } from 'react';

function FormConfirmar(props){
    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
    return (
      <Container>    
        <div className="float-end mt-2">
            <Button variant="primary" onClick={handleShow}>
                Eliminar
            </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmación de Eliminación</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Si estás seguro de querer eliminar el registro haz click en Eliminar; de lo contrario haz click en Cancelar</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
}

export default FormConfirmar
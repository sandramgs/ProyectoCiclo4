import { Button, Container, Modal } from "react-bootstrap";
import { useState } from 'react';
import { httpDelete } from "../../api/http"

function FormConfirmar({endpoint, id, filas, setFilas}){
    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
      httpDelete(endpoint, id);
      handleClose();
      eliminaId(id);
    };
      
    const eliminaId = (id) => {
      let filtered = filas.filter(function(fila, index, arr){ 
        return fila._id !== id;
      });
      setFilas(filtered);
    };

    return (
      <Container>    
        <div className="float-end mt-2">
            <Button variant="danger" onClick={handleShow}>
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
            <Button variant="primary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={handleSubmit}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
}

export default FormConfirmar
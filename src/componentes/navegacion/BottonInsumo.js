import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

function BottonInsumo() {
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
          <Modal.Title>Insumos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Tipo de Insumo</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option selected>Seleccione Insumo</option>
                  <option>Semilla</option>
                  <option>Fertilizante</option>
                  <option>Agua</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Descripcion Insumo</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option selected>Seleccione</option>
                  <option>Maiz</option>
                  <option>Frijol</option>
                  <option>Algodon</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Unidad de Medida</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option selected>Seleccione</option>
                  <option>Kilos</option>
                  <option>Litros</option>
                  <option>Metros cubicos</option>
                </Form.Select>
              </Form.Group>

            <Form.Group className="mb-3 mt-4" controlId="formGridAddress2">
              <Form.Label>Valor Unidad</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name='date_of_birth'>Tarifa Valida a partir de:</Form.Label>
                <Form.Control />
              </Form.Group>

             
            </Row>

           
          </Form>
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

export default BottonInsumo;

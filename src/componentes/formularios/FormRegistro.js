import {Modal, Button, Form, Container, Row, Col} from "react-bootstrap";
import { useState } from 'react';


function FormRegistro(props){
    const [show, setShow] = useState(props);
      
    const handleClose = () => setShow(false);
      
    return (
      <Container>    
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>                  
              <div className="form-group">
                <label>Nombres y Apellidos</label>
                <input className="form-control"/>
              </div>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Tipo de docuemnto</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Tipo de documento</option>
                  <option>CC - Cédula de ciudadanía</option>
                  <option>CE - Cédula de extranjería</option>
                  <option>TI - Tarjeta de identidad</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Numero de Identifacion</Form.Label>
                <Form.Control />
              </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Comfirmar Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Registrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      );
    }
      
    export default FormRegistro;


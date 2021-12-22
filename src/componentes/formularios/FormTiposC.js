import {Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from 'react';

const initialData = {
  id: 0,
  descripcion: '',
  semilla: '',
  cantSemilla: '',
  fertilizante: '',
  cantFertilizante: '',
  cantidadAgua: ''
}

function FormTiposC({title = "", item = initialData}){
  const [show, setShow] = useState(false);
  const [state, setState] = useState(item);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const alCambiar = (e) => {    
    console.log(state);   
    console.log(e.target.name) 
    setState({
      ...state,
      [e.target.name]:e.target.value
    });
  }
      
  return (
      <>    
          <div className="float-end mt-2">
          <Button variant={title==="Editar" ? "warning" : "primary"} onClick={handleShow}>
            {title}
          </Button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Tipo de Cultivo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Descripcion Cultivo</Form.Label>
                  <Form.Control disabled={title==="Editar"} name="descripcion" defaultValue={state.descripcion} onChange={alCambiar}/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Semilla</Form.Label>
                  <Form.Control disabled={title==="Editar"} name="semilla" defaultValue={state.semilla} onChange={alCambiar}/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Cantidad de Semilla</Form.Label>
                  <Form.Control disabled={title==="Editar"} name="cantSemilla" defaultValue={state.cantSemilla} onChange={alCambiar}/>
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>Ferlilizante</Form.Label>
                  <Form.Control disabled={title==="Editar"} name="fertilizante" defaultValue={state.fertilizante} onChange={alCambiar}/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Cantidad de Ferlilizante</Form.Label>
                  <Form.Control disabled={title==="Editar"} name="cantFertilizante" defaultValue={state.cantFertilizante} onChange={alCambiar}/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Cantidad de agua</Form.Label>
                  <Form.Control disabled={title==="Editar"} name="cantidadAgua" defaultValue={state.cantidadAgua} onChange={alCambiar}/>
                </Form.Group> 
              </Form>
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
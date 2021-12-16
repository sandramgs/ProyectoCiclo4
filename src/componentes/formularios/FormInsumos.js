import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

const initialData = {
    id: 0,
    tipoInsumo: 'Seleccione Tipo Insumo',
    descripcion: '',
    unidad: 'Seleccione Unidad',
    valorUnidad: "0",
    fechaInicioTarifa: ''
}

function FormInsumos({title = "", item = initialData}) {
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
          <Modal.Title>Insumos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>        
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState" >
                <Form.Label>Tipo de Insumo</Form.Label>
                <Form.Select defaultValue={state.tipoInsumo} name="tipoInsumo" disabled={title==="Editar"} onChange={alCambiar}>
                  <option selected>{state.tipoInsumo}</option>
                  <option>Semilla</option>
                  <option>Fertilizante</option>
                  <option>Agua</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState" >
                <Form.Label>Unidad de Medida</Form.Label>
                <Form.Select defaultValue={state.unidad} name="unidad" disabled={title==="Editar"}>
                  <option selected onChange={alCambiar}>{state.unidad}</option>
                  <option>Kilos</option>
                  <option>Litros</option>
                  <option>Metros cubicos</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridState" >
                <Form.Label>Descripcion Insumo</Form.Label>
                <Form.Control disabled={title==="Editar"} name="descripcion" defaultValue={state.descripcion} onChange={alCambiar}/>
            </Form.Group>

            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
              <Form.Label>Valor Unidad</Form.Label>
              <Form.Control defaultValue={state.valorUnidad} name="valorUnidad" onChange={alCambiar}/>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date">Tarifa Valida a partir de:</Form.Label>
                <Form.Control defaultValue={state.fechaInicioTarifa} name="fechaInicioTarifa" onChange={alCambiar}/>
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

export default FormInsumos;

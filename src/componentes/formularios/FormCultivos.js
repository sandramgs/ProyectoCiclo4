import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

const initialData = {
  id: 0,
  predio: 'Seleccione el predio',
  tipoCultivo: 'Seleccione',
  area: '',
  inicioCultivo: "",
  finCosecha: "",
  valorTotal: "0"
}

function FormCultivos({title = "", item = initialData}) {
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
          <Modal.Title>Cultivos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Predio</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option selected>Seleccione el predio</option>
                  <option>Predio 1</option>
                  <option>Predio 2</option>
                  <option>Predio 3</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Tipo de cultivo</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option selected>Seleccione</option>
                  <option>Maiz</option>
                  <option>Frijol</option>
                  <option>Algodon</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Valor Unidad</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" defaultValue={state.area} name="area" onChange={alCambiar}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cosecha(Kg)</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Fecha de inicio
                </Form.Label>
                <Form.Control defaultValue={state.inicioCultivo} name="iniciocultivo" onChange={alCambiar}/>
              </Form.Group>
              <Button
                className=" mt-4"
                as={Col}
                controlId="formGridCity"
                variant="primary"
                type="submit"
              >
                Calcular
              </Button>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Fin Cultivo
                </Form.Label>
                <Form.Control defaultValue={state.finCosecha} name="finCoshecha" onChange={alCambiar}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Inicio Cosecha
                </Form.Label>
                <Form.Control defaultValue={state.inicioCultivo} name="iniciocultivo" onChange={alCambiar}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Fin Cosecha
                </Form.Label>
                <Form.Control defaultValue={state.inicioCultivo} name="iniciocultivo" onChange={alCambiar}/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Semilla
                </Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Kg/Ha
                </Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Kg Total
                </Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Valor/Ha
                </Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Valor Total
                </Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Fertilizante
                </Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Kg/Ha/Sem
                </Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Kg Total
                </Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Valor/Ha
                </Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Valor/Sem
                </Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Valor Total
                </Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Agua
                </Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  m3/Ha/Sem
                </Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  m3 Total
                </Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Valor/Ha
                </Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Valor/Sem
                </Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date" name="date_of_birth">
                  Valor Total
                </Form.Label>
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

export default FormCultivos;

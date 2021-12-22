import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { post, put } from "../../api/http"

const initialData = {
  id: 0,
<<<<<<< HEAD
  predio: 'Seleccione Predio',
  tipoCultivo: 'Seleccione Tipo de Cultivo',
  area: 0,
  cosechaKg: 0,
  inicioCultivo: '',
  finCultivo: '',
  inicioCosecha: '',
  finCosecha: '',
  semanasCultivo: 0,
  valorCultivo: 0
}

function FormCultivos({title = "", item = initialData, setFilas, filas}) {
=======
  predio: 'Seleccione el predio',
  tipoCultivo: 'Seleccione',
  area: '',
  inicioCultivo: "",
  finCosecha: "",
  valorTotal: "0"
}

function FormCultivos({title = "", item = initialData}) {
>>>>>>> 3fdaf03bf373c349ddeab5871e687043bec184d4
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
<<<<<<< HEAD
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const cultivo = {
      descri_predio: data.get("predio"),
      descri_tipoc: data.get("descri_tipoc"),
      area_has: data.get("area"),
      inicio_cultivo: data.get("inicioCultivo"),
      fin_cosecha: data.get("finCosecha"),
      valor_cultivo: data.get("valorCultivo")
    };
    if(title === "Editar"){
      put("cultivos/editar", cultivo);
      handleClose();
      actualizarId(item.id);
    }else{
      let res = await post("cultivos/nuevo", cultivo);
      handleClose();
      console.log("res ...", res._id);
      insertarCultivo(Object.assign(cultivo, {_id: res._id}));
    }  
  } 

  const actualizarId = (id) => {
    const filtered= filas.map((fila) => {
      if (fila._id === id){
        return({...state});
      }else{
        return(fila);
      }
    })
    setFilas(filtered);
  };

  const insertarCultivo = (cultivo) => {
    filas.push(cultivo);
    console.log("filas después del push", filas)
    setFilas([...filas]);
  };
=======
>>>>>>> 3fdaf03bf373c349ddeab5871e687043bec184d4

  return (
    <>
      <div className="float-end mt-2">
        <Button variant={title==="Editar" ? "warning" : "primary"} onClick={handleShow}>
<<<<<<< HEAD
          {title}
=======
        {title}
>>>>>>> 3fdaf03bf373c349ddeab5871e687043bec184d4
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cultivos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit = {handleSubmit} id="crearCultivo">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Predio</Form.Label>
                <Form.Select defaultValue={state.predio} name="predio" onChange={alCambiar}>
                  <option selected>{state.predio}</option>
                  <option>Finca Los Potrillos</option>
                  <option>Finca Girasol</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Tipo de cultivo</Form.Label>
                <Form.Select defaultValue={state.tipoCultivo} name="tipoCultivo" onChange={alCambiar}>
                  <option selected>{state.tipoCultivo}</option>
                  <option>Maiz Popocho</option>
                  <option>Frijol</option>
                  <option>Algodon</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
<<<<<<< HEAD
                <Form.Label>Hectareas</Form.Label>
                <Form.Control defaultValue={state.area} name="area" onChange={alCambiar} />
=======
                <Form.Label>Valor Unidad</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" defaultValue={state.area} name="area" onChange={alCambiar}/>
>>>>>>> 3fdaf03bf373c349ddeab5871e687043bec184d4
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cosecha(Kg)</Form.Label>
                <Form.Control defaultValue={state.cosechaKg} name="cosechaKg"/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
<<<<<<< HEAD
                <Form.Label type="date">Fecha inicio Cultivo</Form.Label>
                <Form.Control defaultValue={state.inicioCultivo} name="inicioCultivo"/>
=======
                <Form.Label type="date" name="date_of_birth">
                  Fecha de inicio
                </Form.Label>
                <Form.Control defaultValue={state.inicioCultivo} name="iniciocultivo" onChange={alCambiar}/>
>>>>>>> 3fdaf03bf373c349ddeab5871e687043bec184d4
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
<<<<<<< HEAD
                <Form.Label type="date">Fin Cultivo</Form.Label>
                <Form.Control defaultValue={state.finCultivo} name="finCultivo"/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date">Inicio Cosecha</Form.Label>
                <Form.Control defaultValue={state.inicioCosecha} name="inicioCosecha"/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label type="date">Fin Cosecha</Form.Label>
                <Form.Control defaultValue={state.finCosecha} name="finCosecha"/>
=======
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
>>>>>>> 3fdaf03bf373c349ddeab5871e687043bec184d4
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Semilla</Form.Label>
                <Form.Control/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Kg/Ha</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Kg Total</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Valor/Ha</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Valor Total</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Fertilizante</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Kg/Ha/Sem</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Kg Total</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Valor/Ha</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Valor/Sem</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Valor Total</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Agua</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>m3/Ha/Sem</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>m3 Total</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Valor/Ha</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Valor/Sem</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Valor Total</Form.Label>
                <Form.Control defaultValue={state.valorCultivo} name="valorCultivo"/>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" form="crearCultivo" type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormCultivos;

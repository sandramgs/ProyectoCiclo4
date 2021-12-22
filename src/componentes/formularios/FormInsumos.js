import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { post, put } from "../../api/http"
import { get } from "../../"

const initialData = {
    id: 0,
    tipoInsumo: 'Seleccione Tipo Insumo',
    descripcion: '',
    unidad: 'Seleccione Unidad',
    valorUnidad: "0",
    fechaInicioTarifa: ''
}

function FormInsumos({title = "", item = initialData, setFilas, filas}) {
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

  const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const insumo = {
        tipo_insumo: data.get("tipoInsumo"),
        unidad_medida: data.get("unidad"),
        descripcion: data.get("descripcion"),
        valor_unidad: data.get("valorUnidad"),
        valido_desde: data.get("fechaInicioTarifa")
      };
      if(title === "Editar"){
        put("insumos/editar", insumo);
        handleClose();
        actualizarId(item.id);
      }else{
        let res = await post("insumos/nuevo", insumo);
        handleClose();
        console.log("res ...", res._id);
        insertarInsumo(Object.assign(insumo, {_id: res._id}));
      }  
  } 

  const actualizarId = (id) => {
    console.log("filas desde FormInsumos", filas);
    const filtered= filas.map((fila) => {
      if (fila._id === id){
        return({...state});
      }else{
        return(fila);
      }
    })
    setFilas(filtered);
  };

  const insertarInsumo = (insumo) => {
    filas.push(insumo);
    console.log("filas después del push", filas)
    setFilas([...filas]);
  };

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
          <Form onSubmit = {handleSubmit} id="crearInsumo">        
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
          <Button variant="primary" form="crearInsumo" type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormInsumos;

import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

export const Registrate = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          {" "}
          <div className="text-light" style={{ maxWidth: "500px" }}>
            <h1>Registrate</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Apellido</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Tipo de docuemnto</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Tipo de documento</option>
                    <option>CC</option>
                    <option>C.E</option>
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

              <div className="col-12 mb-3 text-center">
                                <button id="btnLogin" type="button" className="btn btn-lg btn-primary">Registrar</button>
                            </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Registrate;

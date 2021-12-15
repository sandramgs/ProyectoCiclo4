import DataTable from "react-data-table-component";
import FormPredios from "../formularios/FormPredios";
import { Card } from "react-bootstrap"

const columns = [
    {
      name: "Codigo",
      selector: "codigo",
      sortable: true
    },
    {
      name: "Hectareas",
      selector: "hectareas",
      sortable: true
    },
    {
      name: "Latitud",
      selector: "latitud",
      sortable: true
    },
    {
      name: "Longitud",
      selector: "longitud",
      sortable: true
    },
    {
      name: "Descripción",
      selector: "descripcion",
      sortable: true
    },
    {
      name: "Gestor",
      selector: "gestor",
      sortable: true,
      right: true
    }
  ];

  const filas = [
    {
        id: 1,
        codigo: '0001',
        hectareas: '200',
        latitud: '1,22,33,0',
        longitud: '2,34,55,6',
        descripcion: "Predio Prueba 1",
        gestor: "msalcedo"
    },
    {
      id: 2,
      codigo: '0002',
      hectareas: '3000',
      latitud: '1,00,33,0',
      longitud: '4,34,99,0',
      descripcion: "Predio Prueba 2",
      gestor: "opulido"
    }
  ]

  function Predios(props) {
    return (
      <Card className="transparente">
        <Card.Body>
          <Card.Title>
            <h2>Predios</h2>
          </Card.Title>
          <FormPredios title="Nuevo"/>
          <div className="row"></div>
          <div className="card mt-5">
            <DataTable
              columns={columns}
              data={filas}
              defaultSortField="title"
              FixedHeader="true"
              striped= "true"
              pagination
            />
          </div>
        </Card.Body>
      </Card>
    );
  }
  export default Predios;
import DataTable from "react-data-table-component";
import BottonNew from "../navegacion/BottonNew";
import { Card } from "react-bootstrap";

const columns = [
    {
      name: "Predio",
      selector: "predio",
      sortable: true
    },
    {
      name: "Tipo Cultivo",
      selector: "tipoCultivo",
      sortable: true
    },
    {
      name: "Area (Has)",
      selector: "area",
      sortable: true
    },
    {
      name: "Inicio Cultivo",
      selector: "inicioCultivo",
      sortable: true
    },
    {
      name: "Fin Cosecha",
      selector: "finCosecha",
      sortable: true
    },
    {
      name: "Valor Total",
      selector: "valorTotal",
      sortable: true,
      right: true
    },
    {
      name: "Acción",
      selector: "accion",
      sortable: true,
      right: true
    }
  ];

  const filas = [
    {
        id: 1,
        predio: '0001 - Finca Maizal',
        tipoCultivo: 'Maiz popocho',
        area: '50',
        inicioCultivo: "01-01-2022",
        finCosecha: "01-06-2021",
        valorTotal: "4500000",
        accion: "ninguna"
    },
    {
        id: 2,
        predio: '0002 - Hacienda Patillal',
        tipoCultivo: 'Frijol rojo',
        area: '100',
        inicioCultivo: "01-01-2021",
        finCosecha: "05-06-2021",
        valorTotal: "6100000",
        accion: "ninguna"
    },
    {
        id: 3,
        predio: '0020 - Finca La Prosperidad',
        tipoCultivo: 'Maiz popocho',
        area: '200',
        inicioCultivo: "01-12-2021",
        finCosecha: "01-06-2022",
        valorTotal: "9000000",
        accion: "ninguna"
    }
  ]

  function Cultivos() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <h2>Cultivos</h2>
          </Card.Title>
          <BottonNew />
          <div className="row"></div>
          <div className="card mt-5">
            <DataTable
              columns={columns}
              data={filas}
              defaultSortField="title"
              pagination
              selectableRows />
          </div>
        </Card.Body>
      </Card>
    );
  }
  export default Cultivos;